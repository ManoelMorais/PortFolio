type SkillItem =
  | { name: string; icon: string; emoji?: never }
  | { name: string; emoji: string; icon?: never };

type SkillGroup = {
  label: string;
  color: string;
  border: string;
  bg: string;
  skills: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Main Stack",
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
    skills: [
      { name: "Java 17", icon: "images/java_icon.png" },
      { name: "Spring Boot", icon: "images/spring-boot.png" },
      { name: "Angular", icon: "images/angular.png" },
      { name: "PostgreSQL", icon: "images/sql_icon.png" },
      { name: "TypeScript", icon: "images/typescriptl_icon.png" },
    ],
  },
  {
    label: "Power Platform",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
    skills: [
      { name: "Power Apps", emoji: "⚡" },
      { name: "Power Automate", emoji: "🔄" },
      { name: "Power BI", emoji: "📊" },
      { name: "SharePoint", emoji: "🗂️" },
    ],
  },
  {
    label: "Also work with",
    color: "text-secundaria",
    border: "border-secundaria/20",
    bg: "bg-secundaria/5",
    skills: [
      { name: "Python", icon: "images/python_icon.png" },
      { name: "React", icon: "images/reactjs_icon.png" },
      { name: "Docker", icon: "images/docker.png" },
      { name: "Git", icon: "images/git.png" },
      { name: "Linux", icon: "images/ubuntu.png" },
    ],
  },
  {
    label: "Learning",
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
    skills: [
      { name: "Next.js", icon: "images/nextjs_icon.png" },
      { name: "Android", icon: "images/android.png" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-cardlight py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="gold-line" />
          <span className="font-mono text-xs text-secundaria tracking-widest uppercase">
            Tech stack
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-extras font-bold mb-4">
          What I build with
        </h2>
        <p className="text-muted text-lg mb-16 max-w-xl">
          Java and Spring Boot are my primary tools. Everything else I use
          when the project demands it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map(({ label, color, border, bg, skills }) => (
            <div
              key={label}
              className={`rounded-2xl border ${border} ${bg} p-7 hover:border-opacity-60 transition-all duration-300`}
            >
              <p className={`font-mono text-xs ${color} tracking-widest uppercase mb-6`}>
                {label}
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map(({ name, icon, emoji }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 bg-principal/60 border border-white/5 rounded-lg px-3 py-2 hover:border-white/20 transition-colors duration-200"
                  >
                    {icon ? (
                      <img src={icon} alt={name} className="w-5 h-5 object-contain" />
                    ) : (
                      <span className="text-base leading-none">{emoji}</span>
                    )}
                    <span className="text-extras/80 text-sm font-body">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Faixa de soft skills */}
        <div className="mt-12 bg-principal/50 border border-white/5 rounded-2xl p-7">
          <p className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
            Also bring to the table
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "System design",
              "Requirements analysis",
              "REST API design",
              "Problem solving",
              "Technical documentation",
              "Project planning",
              "Communication",
            ].map((s) => (
              <span
                key={s}
                className="text-extras/60 text-sm border border-white/10 rounded-full px-4 py-1.5 hover:border-secundaria/40 hover:text-extras transition-all duration-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
