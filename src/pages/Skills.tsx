import { resume } from "@/data/resume";
import { PageHeader } from "./About";

const Skills = () => {
  return (
    <section>
      <PageHeader tag="tech-stack" title="Skills" subtitle="Tools and technologies I work with day-to-day." />
      <div className="container pb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(resume.skills).map(([cat, items]) => (
          <div key={cat} className="p-6 rounded-lg border border-border bg-card/50 hover:border-primary transition-colors">
            <h2 className="font-mono text-sm text-primary mb-4">// {cat.toLowerCase()}</h2>
            <ul className="space-y-2">
              {items.map((s) => (
                <li key={s} className="font-mono text-sm flex items-center gap-2">
                  <span className="text-accent">$</span>{s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
