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
    <section id="features" className="scroll-mt-16 border-t border-border bg-secondary/30 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Everything you need</h2>
          <p className="text-lg text-muted-foreground">
            Built specifically for legal professionals who need speed without sacrificing accuracy
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card key={idx} className="transition-shadow hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
