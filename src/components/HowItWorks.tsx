export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Upload PDF/Word or paste text",
      description: "Drag and drop or paste your contract directly",
    },
    {
      number: "2",
      title: "Choose your focus",
      description: "General review, red flags, or client summary",
    },
    {
      number: "3",
      title: "Get your brief in under 2 minutes",
      description: "AI extracts key terms, risks, and action items",
    },
    {
      number: "4",
      title: "Export & share",
      description: "Download as PDF or Word, ready for your client",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-16 container py-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps from contract to brief
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {step.number}
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
