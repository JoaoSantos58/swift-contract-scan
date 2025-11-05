export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-gradient-to-br from-secondary/30 to-background py-16">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-8 text-sm">
          <button
            onClick={() => scrollToSection("pricing")}
            className="font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            FAQ
          </button>
          <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-accent">
            Security & Privacy
          </a>
          <a
            href="mailto:hello@legalbrief.ai"
            className="font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            Contact
          </a>
        </div>
        <div className="space-y-3 text-center text-sm text-muted-foreground">
          <p className="font-medium">© {currentYear} LegalBrief. All rights reserved.</p>
          <p className="text-xs">Not a law firm. Outputs are for informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};
