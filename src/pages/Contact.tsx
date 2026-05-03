import { resume } from "@/data/resume";
import { PageHeader } from "./About";
import { Mail, Linkedin, Globe, MapPin, Github } from "lucide-react";

const Contact = () => {
  const items = [
    { icon: Mail, label: "email", value: resume.email, href: `mailto:${resume.email}` },
    { icon: Linkedin, label: "linkedin", value: resume.linkedin, href: `https://${resume.linkedin}` },
    { icon: Github, label: "github", value: "github.com/karan00006", href: "https://github.com/karan00006" },
    { icon: Globe, label: "portfolio", value: resume.portfolio, href: `https://${resume.portfolio}` },
    { icon: MapPin, label: "location", value: resume.location },
  ];
  return (
    <section>
      <PageHeader tag="get-in-touch" title="Contact" subtitle="Open to freelance projects, collaboration, and full-time roles." />
      <div className="container pb-16">
        <div className="p-8 md:p-12 rounded-lg border border-border bg-card/50 border-glow">
          <pre className="font-mono text-xs md:text-sm text-muted-foreground mb-8 overflow-x-auto">
{`> const response = await contact({
    from: "you",
    to:   "${resume.name.toLowerCase()}",
    intent: "let's build something"
  });`}
          </pre>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it) => {
              const Inner = (
                <div className="p-5 rounded-md border border-border bg-background/50 hover:border-primary transition-colors h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <it.icon className="h-4 w-4 text-primary" />
                    <span className="font-mono text-xs text-muted-foreground">{it.label}</span>
                  </div>
                  <p className="font-mono text-sm break-all">{it.value}</p>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href} target="_blank" rel="noreferrer">{Inner}</a>
              ) : (
                <div key={it.label}>{Inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
