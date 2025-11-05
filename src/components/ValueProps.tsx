import { Zap, Target, Workflow } from "lucide-react";

export const ValueProps = () => {
  const values = [
    {
      icon: Zap,
      title: "From 50 pages to a 2-minute brief",
      description: "Get the essentials and red flags instantly",
    },
    {
      icon: Target,
      title: "Actionable insights",
      description: "Risk flags, missing terms, and suggested follow-ups",
    },
    {
      icon: Workflow,
      title: "Fits your workflow",
      description: "Upload, get brief, export PDF/Word",
    },
  ];

  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl border-2 border-border/50 bg-gradient-to-br from-background to-secondary/30 p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_hsl(var(--accent)/0.15)]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-accent/10 to-purple-500/10 blur-2xl transition-all duration-300 group-hover:scale-150"></div>
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/10 shadow-lg">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
