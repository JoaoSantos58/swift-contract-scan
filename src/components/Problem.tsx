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
    <section className="border-y border-border bg-secondary/50 py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                  <problem.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
