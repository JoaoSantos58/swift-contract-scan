import { Shield, Lock, Trash2, FileWarning } from "lucide-react";

export const Security = () => {
  const securityPoints = [
    {
      icon: Shield,
      title: "Your data stays yours",
      description: "We don't train on your documents. Ever.",
    },
    {
      icon: Lock,
      title: "Encrypted in transit",
      description: "TLS encryption. Access limited to your account.",
    },
    {
      icon: Trash2,
      title: "You control your data",
      description: "Delete files at any time with one click.",
    },
    {
      icon: FileWarning,
      title: "Not a law firm",
      description: "Outputs are informational. Final judgment is yours.",
    },
  ];

  return (
    <section className="border-y border-border bg-secondary/30 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Security & Privacy</h2>
            <p className="text-lg text-muted-foreground">
              Built with confidentiality and trust at the core
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {securityPoints.map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background">
                  <point.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
