import { Link } from "react-router-dom";
import { ArrowRight, MapPin, GraduationCap, Briefcase, ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import profilePic from "@/assets/profile.png";
import cbrixLogo from "@/assets/cbrix-logo.png";
import alhijazTravel from "@/assets/projects/alhijaz-travel.png";
import cheapHolidaysPackages from "@/assets/projects/cheap-holidays-packages.png";
import buraqTravel from "@/assets/projects/buraq-travel.png";
import duatour from "@/assets/projects/duatour.png";
import nottyNotes from "@/assets/projects/notty-notes.png";
import studyforge from "@/assets/projects/studyforge.png";

const featuredImages: Record<string, string> = {
  "alhijaz-travel": alhijazTravel,
  "cheap-holidays-packages": cheapHolidaysPackages,
  "buraq-travel": buraqTravel,
  "duatour": duatour,
  "notty-notes": nottyNotes,
  "studyforge": studyforge,
};

const featuredProjects = resume.projects.filter((p) =>
  ["Al Hijaz Travel", "Cheap Holidays Packages", "Buraq Travel", "Dua Tour", "Notty Notes — Margin", "StudyForge — AI Study OS"].includes(p.name)
);


const Home = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container py-20 md:py-28 relative">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center">
          <div className="max-w-3xl order-2 md:order-1">
            <p className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
              available for opportunities
            </p>
            <h1 className="font-mono text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-muted-foreground">&lt;</span>
              <span className="text-gradient">{resume.name}</span>
              <span className="text-muted-foreground"> /&gt;</span>
            </h1>
            <p className="text-2xl md:text-4xl font-semibold mb-6">
              I build <span className="text-primary">responsive</span>, modern{" "}
              <span className="text-accent">web applications</span>.
            </p>

            <a
              href={resume.company.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-border bg-card/60 hover:border-primary transition-colors group"
            >
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">currently @</span>
              <img
                src={cbrixLogo}
                alt="Cbrix logo"
                width={64}
                height={20}
                className="h-5 w-auto"
                loading="lazy"
              />
            </a>

            <p className="text-muted-foreground text-lg max-w-2xl mb-10 leading-relaxed">
              {resume.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono font-medium hover:glow-primary transition-all">
                view projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:border-primary font-mono font-medium transition-colors">
                get in touch
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 font-mono text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{resume.location}</span>
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" />PUCIT, Punjab University</span>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 float">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-accent/25 to-transparent blur-3xl pulse-glow rounded-full" />
              <div className="absolute -inset-6 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
              <img
                src={profilePic}
                alt={`${resume.name} — ${resume.role}`}
                width={640}
                height={640}
                className="relative w-full h-full object-cover object-top"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 75% at 50% 42%, #000 35%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.4) 80%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 70% 75% at 50% 42%, #000 35%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,0.4) 80%, transparent 100%)",
                  filter: "drop-shadow(0 10px 30px hsl(var(--primary) / 0.25))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { k: "5+", v: "projects shipped" },
            { k: "10+", v: "technologies" },
            { k: "1+", v: "years building" },
          ].map((s) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary transition-colors"
            >
              <div className="font-mono text-4xl font-bold text-gradient mb-1">{s.k}</div>
              <div className="font-mono text-sm text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-sm text-primary mb-2">featured work</p>
            <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline">
            view all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p, i) => {
            const img = p.image ? featuredImages[p.image] : undefined;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group rounded-lg border border-border bg-card/50 overflow-hidden hover:border-primary hover:shadow-[0_15px_40px_-15px_hsl(var(--primary)/0.5)] transition-colors flex flex-col"
              >
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
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-md bg-primary/10 border border-primary/30">
                      <Folder className="h-5 w-5 text-primary" />
                    </div>
                    {p.url && (
                      <a
                        href={`https://${p.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Open ${p.name}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="font-mono text-xs px-2 py-1 rounded bg-secondary text-foreground/80 border border-border">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 md:hidden">
          <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline">
            view all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="container pb-24">
        <div className="rounded-2xl border border-border bg-card/50 p-8 md:p-12 backdrop-blur">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="font-mono text-sm text-primary mb-2">tech stack</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What I work with daily</h2>
              <p className="text-muted-foreground max-w-xl">
                From PHP + WordPress backends to React + TypeScript frontends, I build full-stack client projects with clean, maintainable code.
              </p>
            </div>
            <Link to="/skills" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono font-medium hover:glow-primary transition-all whitespace-nowrap">
              explore skills <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["React", "TypeScript", "PHP", "WordPress", "Bootstrap", "Tailwind", "MySQL", "Git"].map((tech) => (
              <span key={tech} className="font-mono text-sm px-4 py-2 rounded-full border border-border bg-background/60 text-foreground hover:border-primary hover:text-primary transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

