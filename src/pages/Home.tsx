import { Link } from "react-router-dom";
import { ArrowRight, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { resume } from "@/data/resume";
import profilePic from "@/assets/profile.png";
import cbrixLogo from "@/assets/cbrix-logo.png";

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
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-3xl" />
              <img
                src={profilePic}
                alt={`${resume.name} — ${resume.role}`}
                width={640}
                height={640}
                className="relative w-full h-full object-cover object-top"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 65% 70% at 50% 45%, hsl(0 0% 0% / 1) 40%, hsl(0 0% 0% / 0.85) 60%, hsl(0 0% 0% / 0) 95%)",
                  maskImage:
                    "radial-gradient(ellipse 65% 70% at 50% 45%, hsl(0 0% 0% / 1) 40%, hsl(0 0% 0% / 0.85) 60%, hsl(0 0% 0% / 0) 95%)",
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
            <div key={s.v} className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary transition-colors">
              <div className="font-mono text-4xl font-bold text-gradient mb-1">{s.k}</div>
              <div className="font-mono text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
