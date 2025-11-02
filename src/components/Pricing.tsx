import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingProps {
  onWaitlistClick: () => void;
}

export const Pricing = ({ onWaitlistClick }: PricingProps) => {
  const features = [
    "30 documents/month",
    "PDF & Word export",
    "Email support",
    "Priority feature access",
    "Price locked forever",
  ];

  return (
    <section id="pricing" className="scroll-mt-16 container py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Pricing
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground">
            Lock in founder pricing — first 100 subscribers only
          </p>
        </div>
        <div className="mx-auto max-w-md">
          <Card className="relative overflow-hidden border-2 border-accent/20 shadow-[0_0_50px_hsl(var(--accent)/0.15)]">
            {/* Gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5"></div>
            
            <CardHeader className="relative text-center pb-8">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-accent to-purple-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                LIMITED OFFER
              </div>
              <CardTitle className="mb-4 text-3xl">Early Access</CardTitle>
              <div className="mb-3">
                <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-6xl font-extrabold text-transparent">
                  $24
                </span>
                <span className="text-xl text-muted-foreground">/month</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                First 100 subscribers • Price locked forever
              </p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="mb-8 space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={onWaitlistClick} variant="hero" size="lg" className="w-full">
                Join the waitlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
