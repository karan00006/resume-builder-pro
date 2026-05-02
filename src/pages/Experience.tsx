import { resume } from "@/data/resume";
import { PageHeader } from "./About";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section>
      <PageHeader tag="work-history" title="Experience" subtitle="Real-world projects, real clients, shipped code." />
      <div className="container pb-12">
        <div className="relative border-l-2 border-primary/40 pl-8 space-y-10">
          {resume.experience.map((job) => (
            <div key={job.company} className="relative">
              <span className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-primary glow-primary flex items-center justify-center">
                <Briefcase className="h-3 w-3 text-primary-foreground" />
              </span>
              <div className="p-6 rounded-lg border border-border bg-card/50 hover:border-primary transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h2 className="text-2xl font-bold">{job.role}</h2>
                  <span className="font-mono text-sm text-accent">{job.period}</span>
                </div>
                <p className="font-mono text-primary mb-4">
                  @{" "}
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}{" "}
                  · {job.location}
                </p>
                <ul className="space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="text-muted-foreground flex gap-3 leading-relaxed">
                      <span className="text-primary font-mono mt-1">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
