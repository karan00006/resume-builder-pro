import { NavLink, Link } from "react-router-dom";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";
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
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <PageTransition />
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> echo "built with React + Vite — © 2026 karan"
          </p>
          <div className="flex items-center gap-3">
            <a href="mailto:karan@email.com" aria-label="Email" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"><Mail className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/karan-jee-50868b315" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/karan00006" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
