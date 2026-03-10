import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    featured: true,
    category: "Power Platform · Corporate",
    badge: "Live in production",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
    name: "Energisa — 5 Internal Systems",
    description:
      "Five systems designed, built and deployed inside Energisa/SE — one of the largest energy distributors in Northeast Brazil. Used daily by field electricians, supervisors and managers.",
    details: [
      "SICME — EPI tracking with photo record, RH integration and BI dashboards",
      "CSA — Service center with automated approval flow and notifications",
      "Field GPS App — Expense requests with real-time geolocation of field workers",
      "Meter App — Full lifecycle tracking of electrical meters",
      "Daily Automations — Business rules running on Power Automate + Excel",
    ],
    stack: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Excel"],
    link: null,
    git: null,
  },
  {
    id: 2,
    featured: false,
    category: "Java · Angular · Full Stack",
    badge: "Hosted · GitHub public",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    name: "SIAA — Anomaly Reporting Service",
    description:
      "Final project of the Electrical Network Technician Course at SENAI/SE. Platform to digitize anomaly registration in electrical distribution networks — GPS location, photo upload, approval workflow and analytical dashboards. Built with full business model and SWOT analysis. Priced at R$32,760.",
    details: [],
    stack: ["Java 17", "Spring Boot", "Angular", "PostgreSQL", "JWT", "Koyeb"],
    link: null,
    git: "https://github.com/manoelalmorais/Servico-de-Apontamento-de-Anomalias-BackEnd",
  },
  {
    id: 3,
    featured: false,
    category: "Python · AI",
    badge: "Functional",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    name: "LinguaAI — AI Language Teacher",
    description:
      "Free language learning platform where an AI acts as a personalized teacher. Supports any language with adaptive study plans, structured lessons, auto-generated exercises, audio resources and continuous performance evaluation.",
    details: [],
    stack: ["Python", "Streamlit", "OpenAI API", "Text-to-Speech"],
    link: null,
    git: "https://github.com/manoelalmorais",
  },
  {
    id: 4,
    featured: false,
    category: "React",
    badge: "Live",
    badgeColor: "text-secundaria bg-secundaria/10 border-secundaria/20",
    name: "Financial Control",
    description:
      "Personal finance tracker to practice React — income, expenses and balance overview with a clean interface.",
    details: [],
    stack: ["React.js", "JavaScript", "CSS"],
    link: "https://pro-financeiro.vercel.app/",
    git: "https://github.com/ManoelMorais/Pro-financeiro",
  },
];

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="bg-principal py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="gold-line" />
          <span className="font-mono text-xs text-secundaria tracking-widest uppercase">
            Projects
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl text-extras font-bold mb-4">
          Things I've built
        </h2>
        <p className="text-muted text-lg mb-16 max-w-xl">
          From systems running inside a major energy company to personal
          experiments with AI and automation.
        </p>

        {/* Card destaque — Energisa */}
        <div className="mb-10 rounded-2xl border border-secundaria/25 bg-cardlight overflow-hidden hover:border-secundaria/50 transition-all duration-300 group">
          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="font-mono text-xs text-muted tracking-widest uppercase">
                {featured.category}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${featured.badgeColor}`}>
                {featured.badge}
              </span>
            </div>

            <h3 className="font-display text-3xl text-extras font-bold mb-4 group-hover:text-secundaria transition-colors duration-300">
              {featured.name}
            </h3>
            <p className="text-extras/60 text-base leading-relaxed mb-6 max-w-2xl">
              {featured.description}
            </p>

            {/* Lista de sistemas */}
            <ul className="space-y-2 mb-8">
              {featured.details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-extras/70 text-sm">
                  <span className="text-secundaria mt-0.5">→</span>
                  {d}
                </li>
              ))}
            </ul>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs text-extras/80 bg-secundaria/10 border border-secundaria/20 rounded-md px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project) => (
            <div
              key={project.id}
              className="bg-cardlight border border-white/5 rounded-2xl p-6 flex flex-col hover:border-white/15 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted tracking-widest uppercase">
                  {project.category}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              <h3 className="font-display text-xl text-extras font-bold mb-3 group-hover:text-secundaria transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-extras text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-extras/80 bg-secundaria/10 border border-secundaria/20 rounded-md px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.git && (
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-extras/40 hover:text-secundaria text-sm transition-colors duration-200"
                  >
                    <FaGithub size={15} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-extras/40 hover:text-secundaria text-sm transition-colors duration-200"
                  >
                    <FaExternalLinkAlt size={13} />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
