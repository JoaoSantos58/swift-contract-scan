import { Briefcase, Users, Building2, Settings } from "lucide-react";

export const WhoItsFor = () => {
  const audiences = [
    { icon: Briefcase, label: "Solo attorneys" },
    { icon: Users, label: "Small firms (2–10)" },
    { icon: Building2, label: "In-house counsel" },
    { icon: Settings, label: "Legal ops" },
  ];

  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Who it's for</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {audiences.map((audience, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background">
                  <audience.icon className="h-6 w-6 text-foreground" />
                </div>
                <span className="text-sm font-medium">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
