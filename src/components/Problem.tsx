import { Clock, AlertTriangle, DollarSign } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: Clock,
      text: "Evenings wasted scanning dense contracts",
    },
    {
      icon: AlertTriangle,
      text: "Risks buried in boilerplate and cross-refs",
    },
    {
      icon: DollarSign,
      text: "Clients demand speed without higher fees",
    },
  ];

  return (
    <section className="border-y border-border/50 bg-gradient-to-br from-secondary/50 to-background py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-3">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-destructive/10 to-destructive/5 shadow-md">
                  <problem.icon className="h-8 w-8 text-destructive/70" />
                </div>
                <p className="text-base font-semibold leading-relaxed">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
