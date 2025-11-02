import { FileText, AlertCircle, Calendar, MessageSquare, Download, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Key clause extraction",
      description: "Parties, scope, fees, termination, liability, indemnity, IP, governing law, confidentiality",
    },
    {
      icon: AlertCircle,
      title: "Risk flags",
      description: "Unusual caps, broad indemnities, auto-renewals, one-sided remedies",
    },
    {
      icon: Calendar,
      title: "Deadlines & reminders",
      description: "Important dates and renewal windows automatically identified",
    },
    {
      icon: MessageSquare,
      title: "Ask-anything Q&A",
      description: "Query your contracts: 'What's the notice period?' or 'Are there any penalties?'",
    },
    {
      icon: Download,
      title: "Exports that look good",
      description: "Professional PDF and Word exports ready to share with clients",
    },
    {
      icon: Lock,
      title: "Privacy by default",
      description: "No training on your docs. TLS in transit. You control your data.",
    },
  ];

  return (
    <section id="features" className="scroll-mt-16 border-t border-border py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            Features
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Everything you need
          </h2>
          <p className="text-xl text-muted-foreground">
            Built specifically for legal professionals who need speed without sacrificing accuracy
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="group card-hover border-2 border-border/50 bg-gradient-to-br from-background to-secondary/30"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
