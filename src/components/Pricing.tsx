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
    <section id="pricing" className="scroll-mt-16 container py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">
            Lock in founder pricing — first 100 subscribers only
          </p>
        </div>
        <div className="mx-auto max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="mb-2 text-2xl">Early Access</CardTitle>
              <div className="mb-2">
                <span className="text-5xl font-bold">$24</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">First 100 subscribers • Price locked</p>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm">{feature}</span>
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
