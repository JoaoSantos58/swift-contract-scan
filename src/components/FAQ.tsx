import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Is this legal advice?",
      answer: "No. LegalBrief AI is an assistant that helps you review contracts faster. It's informational only. You make the final call.",
    },
    {
      question: "What file types are supported?",
      answer: "We support PDF and DOCX (Word) files. You can also paste text directly.",
    },
    {
      question: "Do you train on my documents?",
      answer: "Absolutely not. Your documents are processed to generate summaries, but we never use them to train our AI models.",
    },
    {
      question: "How accurate is it?",
      answer: "LegalBrief AI is excellent at spotting structure and key clauses. However, you should always verify the output — it's a tool to save you time, not replace your judgment.",
    },
    {
      question: "Can I share summaries with clients?",
      answer: "Yes! Export as PDF or Word and share however you like. The output is designed to look professional.",
    },
    {
      question: "What about EU users?",
      answer: "We support users globally. Standard security practices apply, and we don't train on your data regardless of location.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-16 container py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about LegalBrief AI
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
