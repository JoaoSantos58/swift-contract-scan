import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  documentType: z.string().min(1, { message: "Please select a document type" }),
  useCase: z.string().trim().max(500).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
  marketing: z.boolean().optional(),
});

interface SampleFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SampleForm = ({ open, onOpenChange }: SampleFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      documentType: "",
      useCase: "",
      consent: false,
      marketing: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Sample request:", { ...values, tag: "sample_request" });
      
      setIsSuccess(true);
      toast({
        title: "Done!",
        description: "Check your inbox for the sample PDF.",
      });
      
      setTimeout(() => {
        onOpenChange(false);
        setIsSuccess(false);
        form.reset();
      }, 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Couldn't send the sample. Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Get a sample summary (PDF)</DialogTitle>
          <DialogDescription>
            See exactly what a 2-minute brief looks like
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center">
            <p className="text-lg font-semibold text-accent">Done!</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Check your inbox for the sample PDF.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Work email <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="documentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Document type <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="msa">MSA</SelectItem>
                        <SelectItem value="saas">SaaS Agreement</SelectItem>
                        <SelectItem value="nda">NDA</SelectItem>
                        <SelectItem value="services">Services Agreement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="useCase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Use case (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., quick risk triage for a new vendor"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">
                        I agree to the <a href="#" className="underline">Terms</a> and have read the{" "}
                        <a href="#" className="underline">Privacy Policy</a>{" "}
                        <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="marketing"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm">
                        Send me product updates & tips
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send me the sample"}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};
