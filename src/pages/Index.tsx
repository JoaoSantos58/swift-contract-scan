import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { ValueProps } from "@/components/ValueProps";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Pricing } from "@/components/Pricing";
import { Security } from "@/components/Security";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SampleForm } from "@/components/SampleForm";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSampleClick={() => setSampleOpen(true)} />
      <main>
        <Hero
          onSampleClick={() => setSampleOpen(true)}
          onWaitlistClick={() => setWaitlistOpen(true)}
        />
        <Problem />
        <ValueProps />
        <Features />
        <HowItWorks />
        <WhoItsFor />
        <Pricing onWaitlistClick={() => setWaitlistOpen(true)} />
        <Security />
        <FAQ />
        <FinalCTA
          onSampleClick={() => setSampleOpen(true)}
          onWaitlistClick={() => setWaitlistOpen(true)}
        />
      </main>
      <Footer />
      
      <WaitlistForm open={waitlistOpen} onOpenChange={setWaitlistOpen} />
      <SampleForm open={sampleOpen} onOpenChange={setSampleOpen} />
    </div>
  );
};

export default Index;
