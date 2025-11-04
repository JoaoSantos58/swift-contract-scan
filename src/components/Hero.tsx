import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Lock } from "lucide-react";
import { SampleForm } from "@/components/SampleForm";
import { WaitlistForm } from "@/components/WaitlistForm";

export const Hero = () => {
  const [showSampleForm, setShowSampleForm] = useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(243_75%_59%/0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,_hsl(199_89%_48%/0.15),transparent_50%)]"></div>
        
        <div className="container relative">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Early Access Now Open — First 100 Users
            </div>

            <h1 className="mb-8 animate-fade-up text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Review contracts{" "}
              <span className="gradient-text">10× faster</span> — summaries in 2 minutes
            </h1>
            
            <p className="mx-auto mb-10 max-w-3xl animate-fade-up text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl" style={{ animationDelay: "0.1s" }}>
              Upload a document and get a concise, client-ready brief with key clauses, risks, deadlines, and next steps. Keep your workflow. Save hours per week.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={() => setShowSampleForm(true)}>
                Get a sample summary (PDF)
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto" onClick={() => setShowWaitlistForm(true)}>
                Join the waitlist
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mb-16 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground animate-fade-up sm:flex-row sm:gap-8" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-sm">
                <Lock className="h-4 w-4 text-accent" />
                <span className="font-medium">No training on your data</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 backdrop-blur-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span className="font-medium">Encrypted in transit</span>
              </div>
            </div>

            {/* Social proof placeholder with modern styling */}
            <div className="flex items-center justify-center gap-8 opacity-30 grayscale animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="h-10 w-28 rounded-lg bg-gradient-to-br from-muted to-muted/50"></div>
              <div className="h-10 w-28 rounded-lg bg-gradient-to-br from-muted to-muted/50"></div>
              <div className="hidden sm:block h-10 w-28 rounded-lg bg-gradient-to-br from-muted to-muted/50"></div>
            </div>
          </div>
        </div>
      </section>

      <SampleForm open={showSampleForm} onOpenChange={setShowSampleForm} />
      <WaitlistForm open={showWaitlistForm} onOpenChange={setShowWaitlistForm} />
    </>
  );
};
