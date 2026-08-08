import { NavLink, Link } from "react-router-dom";
import { Terminal, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { resume } from "@/data/resume";
import PageTransition from "./PageTransition";
import ThemeToggle from "./ThemeToggle";


const navItems = [
  { to: "/", label: "home", end: true },
  { to: "/about", label: "about" },
  { to: "/experience", label: "experience" },
  { to: "/projects", label: "projects" },
  { to: "/skills", label: "skills" },
  { to: "/contact", label: "contact" },
];

const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-mono font-bold">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-foreground">karan</span>
            <span className="text-primary">.dev</span>
          </Link>
          <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <span className="text-primary">/</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="ml-2"><ThemeToggle /></li>
          </ul>
          <div className="md:hidden"><ThemeToggle /></div>
        </nav>
      </header>

      <main className="flex-1">
        <PageTransition />
      </main>

      <footer className="border-t border-border mt-20 bg-card/30">
        <div className="container py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            <div>
              <Link to="/" className="flex items-center gap-2 font-mono font-bold text-lg mb-4">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="text-foreground">karan</span>
                <span className="text-primary">.dev</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
                {resume.summary.slice(0, 120)}...
              </p>
              <div className="flex items-center gap-3">
                <a href={`mailto:${resume.email}`} aria-label="Email" className="p-2.5 rounded-md bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
                <a href={resume.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-md bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://github.com/karan00006" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-md bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Sitemap</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a href={`mailto:${resume.email}`} className="hover:text-primary transition-colors">{resume.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{resume.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a href={resume.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{resume.linkedin}</a>
                </li>
              </ul>
            </div>
          </div>


          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> echo "built with React + Vite — © {new Date().getFullYear()} karan"
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              designed & developed by <span className="text-primary">Karan</span>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default SiteLayout;
