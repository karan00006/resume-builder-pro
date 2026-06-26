import { resume } from "@/data/resume";
import { PageHeader } from "./About";
import { ExternalLink, Folder } from "lucide-react";
import buraqTravel from "@/assets/projects/buraq-travel.png";
import travelAfrica from "@/assets/projects/travel-africa.png";
import meqaat from "@/assets/projects/meqaat.png";
import nottyNotes from "@/assets/projects/notty-notes.png";
import studyforge from "@/assets/projects/studyforge.png";
import duatour from "@/assets/projects/duatour.png";
import hajjUmrah from "@/assets/projects/hajj-umrah.jpg";
import reactApps from "@/assets/projects/react-apps.jpg";
import wordpressThemes from "@/assets/projects/wordpress-themes.jpg";
import mcaSystem from "@/assets/projects/mca-system.jpg";

const imageMap: Record<string, string> = {
  "buraq-travel": buraqTravel,
  "travel-africa": travelAfrica,
  "meqaat": meqaat,
  "notty-notes": nottyNotes,
  "studyforge": studyforge,
  "duatour": duatour,
  "hajj-umrah": hajjUmrah,
  "react-apps": reactApps,
  "wordpress-themes": wordpressThemes,
  "mca-system": mcaSystem,
};

const Projects = () => {
  return (
    <section>
      <PageHeader tag="portfolio" title="Projects" subtitle="A selection of things I've built — from travel platforms to custom CMS." />
      <div className="container pb-12 grid md:grid-cols-2 gap-6">
        {resume.projects.map((p, i) => {
          const img = p.image ? imageMap[p.image] : undefined;
          return (
            <article key={p.name} className="group rounded-lg border border-border bg-card/50 overflow-hidden hover:border-primary hover:-translate-y-1 transition-all flex flex-col">
              {img && (
                <div className="aspect-video overflow-hidden border-b border-border bg-secondary">
                  <img
                    src={img}
                    alt={`${p.name} preview`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-md bg-primary/10 border border-primary/30">
                    <Folder className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.name}</h2>
                {p.url && (
                  <a href={`https://${p.url}`} target="_blank" rel="noreferrer" className="font-mono text-xs text-accent inline-flex items-center gap-1 mb-3 hover:underline">
                    {p.url} <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-xs px-2 py-1 rounded bg-secondary text-foreground/80 border border-border">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
