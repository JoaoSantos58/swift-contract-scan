export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </button>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Security & Privacy
          </a>
          <a
            href="mailto:hello@legalbrief.ai"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
        <div className="space-y-2 text-center text-xs text-muted-foreground">
          <p>© {currentYear} LegalBrief AI. All rights reserved.</p>
          <p>Not a law firm. Outputs are for informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};
