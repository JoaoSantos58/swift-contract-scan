import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-16 w-16 text-accent" />
        </div>
        
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">You're in 🎉</h1>
        
        <p className="mb-8 text-lg text-muted-foreground">
          We've sent a confirmation to your email. Early access details are coming soon.
        </p>

        <div className="mb-10 rounded-lg border border-border bg-card p-6 text-left">
          <h2 className="mb-4 text-lg font-semibold">Next steps:</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Add hello@legalbrief.ai to your safe senders</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Reply with your top 1–2 workflows we should prioritize</span>
            </li>
          </ul>
        </div>

        <Button onClick={() => navigate("/")} variant="hero" size="lg">
          Back to homepage
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
