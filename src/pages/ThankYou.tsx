import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background px-4">
      <div className="relative mx-auto max-w-2xl text-center">
        {/* Decorative gradient blur */}
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"></div>
        
        <div className="relative">
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-purple-500 shadow-[0_0_50px_hsl(var(--accent)/0.3)]">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <h1 className="mb-6 text-5xl font-extrabold md:text-6xl">
            You're in{" "}
            <span className="gradient-text">🎉</span>
          </h1>
          
          <p className="mb-12 text-xl leading-relaxed text-muted-foreground">
            We've sent a confirmation to your email. Early access details are coming soon.
          </p>

          <div className="mb-14 overflow-hidden rounded-2xl border-2 border-border/50 bg-gradient-to-br from-background to-secondary/30 p-8 text-left shadow-lg backdrop-blur-sm">
            <h2 className="mb-6 text-xl font-bold">Next steps:</h2>
            <ul className="space-y-4 leading-relaxed text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  1
                </span>
                <span>Add hello@legalbrief.ai to your safe senders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  2
                </span>
                <span>Reply with your top 1–2 workflows we should prioritize</span>
              </li>
            </ul>
          </div>

          <Button onClick={() => navigate("/")} variant="hero" size="lg" className="w-full sm:w-auto">
            Back to homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
