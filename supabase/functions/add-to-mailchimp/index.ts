import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const MAILCHIMP_API_KEY = Deno.env.get("MAILCHIMP_API_KEY");
const MAILCHIMP_AUDIENCE_ID = Deno.env.get("MAILCHIMP_AUDIENCE_ID");
const MAILCHIMP_SERVER_PREFIX = Deno.env.get("MAILCHIMP_SERVER_PREFIX");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Server-side validation schema
const requestSchema = z.object({
  email: z.string().email("Invalid email format").max(255, "Email too long"),
  tags: z.array(z.string().max(50, "Tag too long")).max(10, "Too many tags").optional().default([]),
  mergeFields: z.record(z.string().max(100, "Field value too long")).optional().default({}),
});

interface MailchimpRequest {
  email: string;
  tags?: string[];
  mergeFields?: Record<string, string>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestBody = await req.json();
    
    // Validate input
    const validated = requestSchema.parse(requestBody);
    const { email, tags, mergeFields } = validated;

    // Mask email for logging (GDPR compliance)
    const maskedEmail = email.replace(/(.{2})(.*)(@.*)/, '$1***$3');
    console.log("Adding subscriber to Mailchimp:", { email: maskedEmail, tagCount: tags.length });

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
      throw new Error("Mailchimp configuration is incomplete");
    }

    // Add subscriber to Mailchimp audience
    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
    
    const response = await fetch(mailchimpUrl, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: mergeFields,
        tags: tags,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // If already subscribed, update tags
      if (data.title === "Member Exists") {
        console.log("Member exists, updating tags");
        const subscriberHash = data.detail.match(/[a-f0-9]{32}/)?.[0];
        
        if (subscriberHash && tags.length > 0) {
          const tagsUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}/tags`;
          
          const tagsResponse = await fetch(tagsUrl, {
            method: "POST",
            headers: {
              "Authorization": `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tags: tags.map(tag => ({ name: tag, status: "active" })),
            }),
          });

          if (!tagsResponse.ok) {
            console.error("Failed to update tags:", await tagsResponse.text());
          }
        }

        return new Response(
          JSON.stringify({ success: true, message: "Updated existing subscriber" }),
          {
            status: 200,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      console.error("Mailchimp API error:", data);
      throw new Error(data.detail || "Failed to add subscriber to Mailchimp");
    }

    console.log("Successfully added subscriber");

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in add-to-mailchimp function:", error);
    
    // Handle validation errors separately
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          error: "Invalid input data", 
          details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
