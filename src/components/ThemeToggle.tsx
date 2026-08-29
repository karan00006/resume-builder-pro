import { useEffect, useState } from "react";
import { Moon, Sun, Palette } from "lucide-react";

export type Theme = "dark" | "light" | "classic";

const themes: Theme[] = ["dark", "light", "classic"];

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored && themes.includes(stored)) return stored;
  return "dark";
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("dark", "light", "classic");
  root.classList.add(theme);
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const cycle = () => {
    setTheme((t) => {
      const idx = themes.indexOf(t);
      return themes[(idx + 1) % themes.length];
    });
  };

  const labels: Record<Theme, string> = {
    dark: "Switch to light mode",
    light: "Switch to classic mode",
    classic: "Switch to dark mode",
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={labels[theme]}
      title={labels[theme]}
      className="relative inline-flex items-center justify-center h-9 w-9 rounded-md border border-border bg-card/60 text-muted-foreground hover:text-primary hover:border-primary transition-all overflow-hidden"
    >
      <Sun
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      />
      <Moon
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      />
      <Palette
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "classic" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
