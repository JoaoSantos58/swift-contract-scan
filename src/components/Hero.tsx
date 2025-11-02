import { Button } from "@/components/ui/button";
import { Shield, Lock } from "lucide-react";

interface HeroProps {
  onSampleClick: () => void;
  onWaitlistClick: () => void;
}

export const Hero = ({ onSampleClick, onWaitlistClick }: HeroProps) => {
  return (
    <section className="container py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Review contracts 10× faster — summaries in 2 minutes
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl md:mb-10">
          Upload a document and get a concise, client-ready brief with key clauses, risks, deadlines, and next steps. Keep your workflow. Save hours per week.
        </p>

        {/* CTAs */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={onSampleClick} variant="hero" size="lg" className="w-full sm:w-auto">
            Get a sample summary (PDF)
          </Button>
          <Button onClick={onWaitlistClick} variant="ghost" size="lg" className="w-full sm:w-auto">
            Join the waitlist
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span>No training on your data</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Encrypted in transit</span>
          </div>
        </div>

        {/* Social proof placeholder */}
        <div className="flex items-center justify-center gap-8 opacity-40">
          <div className="h-8 w-24 rounded bg-muted"></div>
          <div className="h-8 w-24 rounded bg-muted"></div>
          <div className="h-8 w-24 rounded bg-muted"></div>
        </div>
      </div>
    </section>
  );
};
