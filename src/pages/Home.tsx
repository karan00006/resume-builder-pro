import { Link } from "react-router-dom";
import { ArrowRight, MapPin, GraduationCap, ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { resume } from "@/data/resume";
import alhijazTravel from "@/assets/projects/alhijaz-travel.png";
import cheapHolidaysPackages from "@/assets/projects/cheap-holidays-packages.png";
import buraqTravel from "@/assets/projects/buraq-travel.png";
import duatour from "@/assets/projects/duatour.png";
import nottyNotes from "@/assets/projects/notty-notes.png";
import studyforge from "@/assets/projects/studyforge.png";
import studyBuddyMath from "@/assets/projects/study-buddy-math.png";
import geometryGuruPro from "@/assets/projects/geometry-guru-pro.png";

const featuredImages: Record<string, string> = {
  "alhijaz-travel": alhijazTravel,
  "cheap-holidays-packages": cheapHolidaysPackages,
  "buraq-travel": buraqTravel,
  "duatour": duatour,
  "notty-notes": nottyNotes,
  "studyforge": studyforge,
  "study-buddy-math": studyBuddyMath,
  "geometry-guru-pro": geometryGuruPro,
};

const featuredProjects = resume.projects.filter((p) =>
  ["Al Hijaz Travel", "Cheap Holidays Packages", "Buraq Travel", "Dua Tour", "Notty Notes — Margin", "StudyForge — AI Study OS", "Study Buddy Math", "Geometry Guru Pro"].includes(p.name)
);

const TerminalHero = () => {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const text = "say hi";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setTyped(text);
      setShowOutput(true);
      return;
    }

    let index = 0;
    const typeTimer = window.setInterval(() => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index === text.length) {
        window.clearInterval(typeTimer);
        window.setTimeout(() => setShowOutput(true), 300);
      }
    }, 90);

    return () => window.clearInterval(typeTimer);
  }, []);

  return (
    <div className="hero-terminal">
      <div className="hero-terminal-bar">
        <span className="hero-terminal-dot bg-[#ff5f57]" />
        <span className="hero-terminal-dot bg-[#febc2e]" />
        <span className="hero-terminal-dot bg-[#28c840]" />
        <span className="hero-terminal-title">karan@dev — zsh</span>
      </div>
      <div className="hero-terminal-body">
        <div className="hero-terminal-input">
          <span className="text-primary mr-2">$</span>
          {typed}
          <span className="hero-terminal-cursor" />
        </div>
        <div className={`hero-terminal-output ${showOutput ? "is-visible" : ""}`}>
          <div>👋 Hey, I&apos;m <strong>Karan</strong></div>
          <div>💼 Web Developer at <strong>Cbrix</strong></div>
          <div>🌍 Based in <span className="text-emerald-500">{resume.location}</span></div>
          <div>🎓 Studying IT at <strong>PUCIT</strong></div>
        </div>
      </div>
    </div>
  );
};

const HomeProjectCard = ({ project, image }: { project: (typeof resume.projects)[number]; image?: string }) => (
  <article className="home-project-card">
    <div className="home-project-shot">
      <div className="home-project-shot-bar">
        <span className="home-project-shot-dot bg-[#ff5f57]" />
        <span className="home-project-shot-dot bg-[#febc2e]" />
        <span className="home-project-shot-dot bg-[#28c840]" />
        <span className="home-project-shot-url"><span className="text-primary">&#128274;</span>{project.url ?? "portfolio project"}</span>
      </div>
      {image ? (
        <div className="home-project-image-wrap">
          <img src={image} alt={`${project.name} preview`} className="home-project-image" loading="lazy" />
        </div>
      ) : (
        <div className="home-project-placeholder"><span>{project.name}</span></div>
      )}
    </div>
    <div className="home-project-body">
      <div className="home-project-top">
        <div className="home-project-folder"><Folder className="h-4 w-4" /></div>
        {project.url && (
          <a href={`https://${project.url}`} target="_blank" rel="noreferrer" className="home-project-link" aria-label={`Open ${project.name}`}>
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="home-project-tags">
        {project.stack.slice(0, 4).map((stack) => <span key={stack}>{stack}</span>)}
      </div>
    </div>
  </article>
);

const HomeProjectSwiper = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const activeIndexRef = useRef(0);
  const interactingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCards = () => Array.from(trackRef.current?.children ?? []) as HTMLElement[];
  const scrollToCard = (index: number) => {
    const card = getCards()[index];
    if (card) trackRef.current?.scrollTo({ left: card.offsetLeft - 6, behavior: "smooth" });
  };
  const updateActiveIndex = () => {
    const track = trackRef.current;
    const cards = getCards();
    if (!track || cards.length === 0) return;
    const nearest = cards.reduce((best, card, index) =>
      Math.abs(card.offsetLeft - track.scrollLeft - 6) < Math.abs(cards[best].offsetLeft - track.scrollLeft - 6) ? index : best, 0);
    activeIndexRef.current = nearest;
    setActiveIndex(nearest);
  };

  useEffect(() => {
    const autoplay = window.setInterval(() => {
      if (interactingRef.current) return;
      const nextIndex = activeIndexRef.current >= featuredProjects.length - 1 ? 0 : activeIndexRef.current + 1;
      scrollToCard(nextIndex);
    }, 4000);

    return () => window.clearInterval(autoplay);
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    interactingRef.current = true;
    dragRef.current = { active: true, startX: event.clientX, startScrollLeft: track.scrollLeft };
    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragRef.current.active) return;
    event.preventDefault();
    track.scrollLeft = dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track?.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
    dragRef.current.active = false;
    window.setTimeout(() => { interactingRef.current = false; }, 250);
  };

  return (
    <div className="home-project-swiper">
      <div
        ref={trackRef}
        className="home-project-track"
        onScroll={updateActiveIndex}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerEnter={() => { interactingRef.current = true; }}
        onPointerLeave={() => { if (!dragRef.current.active) interactingRef.current = false; }}
      >
        {featuredProjects.map((project) => (
          <HomeProjectCard key={project.name} project={project} image={project.image ? featuredImages[project.image] : undefined} />
        ))}
      </div>
      <div className="home-project-controls">
        <button type="button" onClick={() => scrollToCard(Math.max(0, activeIndex - 1))} aria-label="Previous project" className="home-project-arrow"><ArrowRight className="h-4 w-4 rotate-180" /></button>
        <div className="home-project-dots">
          {featuredProjects.map((project, index) => <button type="button" key={project.name} onClick={() => scrollToCard(index)} className={index === activeIndex ? "is-active" : ""} aria-label={`Go to project ${index + 1}`} />)}
        </div>
        <button type="button" onClick={() => scrollToCard(Math.min(featuredProjects.length - 1, activeIndex + 1))} aria-label="Next project" className="home-project-arrow"><ArrowRight className="h-4 w-4" /></button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="portfolio-hero">
        <div className="hero-copy">
          <div className="hero-badge"><span className="hero-badge-dot" />Available for new projects</div>

          <h1>
            Hi, I&apos;m {resume.name}.<br />
            I build <span className="text-primary">websites</span> that work beautifully.
          </h1>

          <p className="hero-subhead">
            I&apos;m a web developer at {resume.company.name}, where I help build travel booking sites, business websites, and custom web apps for real clients. I&apos;m also studying Information Technology at Punjab University.
          </p>

          <div className="hero-ctas">
            <Link to="/projects" className="hero-btn hero-btn-primary">View my work <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="hero-btn hero-btn-secondary">Get in touch</Link>
          </div>

          <div className="hero-meta">
            <span><MapPin className="h-4 w-4 text-primary" />{resume.location}</span>
            <span><GraduationCap className="h-4 w-4 text-primary" />PUCIT, Punjab University</span>
          </div>
        </div>

        <TerminalHero />
      </div>

      <div className="container pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { k: "10+", v: "projects shipped" },
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

        <HomeProjectSwiper />

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

