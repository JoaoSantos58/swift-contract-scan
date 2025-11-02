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
    <section id="how-it-works" className="scroll-mt-16 container py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Process
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">How it works</h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps from contract to brief
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl border-2 border-border/50 bg-gradient-to-br from-background to-secondary/20 p-8 transition-all duration-300 hover:border-accent/30"
            >
              <div className="flex gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-purple-500 text-xl font-extrabold text-white shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] transition-all duration-300">
                  {step.number}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
