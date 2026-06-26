import { resume } from "@/data/resume";

const PageHeader = ({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) => (
  <div className="container pt-16 pb-8 reveal-up">
    <p className="font-mono text-sm text-primary mb-2">// {tag}</p>
    <h1 className="font-mono text-4xl md:text-5xl font-bold mb-3 animated-gradient">{title}</h1>
    {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
  </div>
);

const About = () => {
  return (
    <section>
      <PageHeader tag="about" title="About me" subtitle="A quick look at who I am and what I bring to a team." />
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-8 rounded-lg border border-border bg-card/50">
          <h2 className="font-mono text-xl font-bold mb-4 text-primary">summary.md</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{resume.summary}</p>
          <h3 className="font-mono text-lg font-bold mb-3 text-accent">strengths()</h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {resume.strengths.map((s) => (
              <li key={s} className="font-mono text-sm flex items-start gap-2">
                <span className="text-primary mt-1">▸</span>{s}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="p-6 rounded-lg border border-border bg-card/50">
            <h3 className="font-mono text-sm text-primary mb-3">education</h3>
            <p className="font-semibold mb-1">BS Information Technology</p>
            <p className="text-sm text-muted-foreground">PUCIT, Punjab University</p>
            <p className="font-mono text-xs text-accent mt-2">// currently enrolled</p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card/50">
            <h3 className="font-mono text-sm text-primary mb-3">languages</h3>
            <ul className="space-y-2">
              {resume.languages.map((l) => (
                <li key={l.name} className="flex justify-between font-mono text-sm">
                  <span>{l.name}</span>
                  <span className="text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
export { PageHeader };
