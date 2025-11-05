import { Briefcase, Users, Building2, Settings } from "lucide-react";

export const WhoItsFor = () => {
  const audiences = [
    { icon: Briefcase, label: "Solo attorneys" },
    { icon: Users, label: "Small firms (2–10)" },
    { icon: Building2, label: "In-house counsel" },
    { icon: Settings, label: "Legal ops" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-border/50 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5"></div>
      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Who We Serve
          </div>
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Who it's for</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {audiences.map((audience, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center gap-3 rounded-2xl border-2 border-border/50 bg-background/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 transition-all duration-300 group-hover:scale-110">
                  <audience.icon className="h-7 w-7 text-accent" />
                </div>
                <span className="font-semibold">{audience.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
