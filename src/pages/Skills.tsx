import { resume } from "@/data/resume";
import { PageHeader } from "./About";

const skillMeta: Record<string, { icon: string; description: string; level: number }> = {
  "Front-End": { icon: "🎨", description: "What people actually see and click on in the browser.", level: 4 },
  "Back-End": { icon: "⚙️", description: "The logic that runs behind the scenes, out of sight.", level: 3 },
  Database: { icon: "🗄️", description: "Where information gets stored and looked up.", level: 3 },
  "CMS & Tools": { icon: "🧰", description: "Platforms I build websites on top of.", level: 4 },
  "Currently Learning": { icon: "🌱", description: "Newer tools I am actively picking up.", level: 2 },
  "Version Control": { icon: "🔀", description: "How I track changes and manage code history.", level: 4 },
};

const SkillDots = ({ level }: { level: number }) => (
  <span className="skill-dots" aria-label={`${level} of 5 experience`}>
    <span className="skill-dots-filled">{"●".repeat(level)}</span>
    <span className="skill-dots-empty">{"○".repeat(5 - level)}</span>
  </span>
);

const Skills = () => {
  return (
    <section>
      <div className="skills-v2-page">
        <PageHeader tag="tech-stack" title="Skills" subtitle="Tools and technologies I work with day-to-day." />
        <p className="skills-v2-legend"><span><span className="skill-dots-filled">●●●●</span><span className="skill-dots-empty">○</span></span> more dots means more hands-on experience</p>
        <div className="skills-v2-list">
          {Object.entries(resume.skills).map(([category, items]) => {
            const meta = skillMeta[category] ?? { icon: "•", description: "Tools I use to build and ship projects.", level: 3 };
            return (
              <div key={category} className="skills-v2-category">
                <div className="skills-v2-category-head"><span className="skills-v2-icon">{meta.icon}</span><h2>{category}</h2></div>
                <p>{meta.description}</p>
                <div className="skills-v2-chips">
                  {items.map((skill) => <span key={skill} className="skills-v2-chip">{skill}<SkillDots level={skill === "HTML5" || skill === "CSS3" || skill === "WordPress" ? 5 : meta.level} /></span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
