import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "LegalBrief saves me hours every week. I can review contracts in minutes instead of spending my entire evening on a single document.",
      author: "Sarah M.",
      role: "Solo Attorney, Contract Law",
    },
    {
      quote: "Finally, AI that actually understands legal language. The risk flags are incredibly accurate and help me spot issues I might have missed.",
      author: "Michael P.",
      role: "Small Firm Partner",
    },
    {
      quote: "My clients love getting clear, professional summaries. LegalBrief helps me deliver better service without raising my rates.",
      author: "Jennifer L.",
      role: "In-House Counsel",
    },
  ];

  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Testimonials
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Trusted by lawyers worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of legal professionals saving hours every week
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card 
              key={idx} 
              className="border-2 border-border/50 bg-gradient-to-br from-background to-secondary/30"
            >
              <CardContent className="p-8">
                <Quote className="mb-6 h-10 w-10 text-accent/30" />
                <p className="mb-6 leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Used by lawyers in the US, UK, Canada, Australia, and beyond
          </p>
        </div>
      </div>
    </section>
  );
};
