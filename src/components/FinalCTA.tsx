import { Button } from "@/components/ui/button";

export const FinalCTA = () => {

  return (
    <>
      <section className="relative overflow-hidden border-y border-border py-24 md:py-32">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(199_89%_48%/0.1),transparent_70%)]"></div>
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Start saving hours{" "}
              <span className="gradient-text">this week</span>
            </h2>
            <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
              Join the waitlist and get an instant sample summary
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://tally.so/r/Xxlvqd" target="_blank" rel="noopener noreferrer">
                  Get a sample summary (PDF)
                </a>
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://tally.so/r/Xxlvqd" target="_blank" rel="noopener noreferrer">
                  Join the waitlist
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
