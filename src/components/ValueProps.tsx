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
    <section className="container py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <value.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
