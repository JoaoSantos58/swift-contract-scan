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
    <section className="border-y border-border/50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              Security & Privacy
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Built with trust at the core</h2>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade security for your confidential documents
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {securityPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="group rounded-2xl border-2 border-border/50 bg-gradient-to-br from-background to-secondary/20 p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 transition-all duration-300 group-hover:scale-110">
                    <point.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{point.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
