import { Link } from "react-router-dom";
import { ArrowRight, MapPin, GraduationCap, ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
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
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div className="home-project-swiper-shell">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        coverflowEffect={{ rotate: 28, stretch: 0, depth: 110, modifier: 1, slideShadows: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="home-project-swiper"
        onSwiper={setSwiper}
      >
        {featuredProjects.map((project) => (
          <SwiperSlide key={project.name}>
            <HomeProjectCard project={project} image={project.image ? featuredImages[project.image] : undefined} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="home-project-controls">
        <button type="button" onClick={() => swiper?.slidePrev()} aria-label="Previous project" className="home-project-arrow"><ArrowRight className="h-4 w-4 rotate-180" /></button>
        <span className="home-project-control-label">Drag to explore</span>
        <button type="button" onClick={() => swiper?.slideNext()} aria-label="Next project" className="home-project-arrow"><ArrowRight className="h-4 w-4" /></button>
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
            I&apos;m <span className="text-primary uppercase">{resume.name}</span>!<br />
            I turn ideas into exceptional <span className="text-primary uppercase">websites</span>.
          </h1>

          <p className="hero-subhead">
            I&apos;m a web developer at {resume.company.name}, where I help build travel booking sites, business websites for real clients. I&apos;m also studying Information Technology at Punjab University.
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

