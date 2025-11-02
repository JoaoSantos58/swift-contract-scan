import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onSampleClick: () => void;
  onWaitlistClick: () => void;
}

export const FinalCTA = ({ onSampleClick, onWaitlistClick }: FinalCTAProps) => {
  return (
    <section className="border-y border-border bg-secondary/50 py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Start saving hours this week
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join the waitlist and get an instant sample summary
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={onSampleClick} variant="hero" size="lg" className="w-full sm:w-auto">
              Get a sample summary (PDF)
            </Button>
            <Button onClick={onWaitlistClick} variant="ghost" size="lg" className="w-full sm:w-auto">
              Join the waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
