export default function About() {
  const stats = [
    { value: "5", label: "Systems in production" },
    { value: "2+", label: "Years building" },
    { value: "3", label: "Stacks mastered" },
  ];

  return (
    <section id="about" className="bg-principal py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="gold-line" />
          <span className="font-mono text-xs text-secundaria tracking-widest uppercase">
            About me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Texto */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-extras font-bold leading-tight mb-8">
              More than code —<br />
              <span className="text-secundaria">systems that matter.</span>
            </h2>

            <div className="space-y-5 text-extras/65 text-extras leading-relaxed">
              <p>
                My name is Manoel Almeida de Morais, I'm a Backend Java developer
                based in Aracaju, Sergipe. I specialize in building real systems —
                not just side projects, but applications that run every day inside
                companies.
              </p>
              <p>
                At Energisa/SE, one of the largest energy distributors in
                Northeast Brazil, I designed and delivered five internal systems
                using Power Platform — from EPI tracking with photo records to
                field GPS apps for electricians. All five are in active production.
              </p>
              <p>
                My main stack is Java + Spring Boot for backend APIs, Angular for
                frontend, and PostgreSQL for data. I also work with Python for
                automation and AI integration, and Power Platform for rapid
                corporate automation.
              </p>
              <p>
                I'm currently finishing two technical courses (SENAI + CPET) and
                a university degree in Systems Analysis. My goal is to build my
                own products while working as a freelancer internationally.
              </p>
            </div>

            {/* Idiomas */}
            <div className="flex gap-6 mt-10">
              {[
                { lang: "Portuguese", level: "Native" },
                { lang: "English", level: "Intermediate" },
                { lang: "Spanish", level: "Intermediate" },
              ].map(({ lang, level }) => (
                <div key={lang} className="text-center">
                  <p className="text-extras text-sm font-semibold">{lang}</p>
                  <p className="text-muted text-xs mt-0.5">{level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats + info */}
          <div className="space-y-6">

            {/* Cards de stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-cardlight border border-white/5 rounded-xl p-5 text-center hover:border-secundaria/30 transition-colors duration-300"
                >
                  <p className="font-display text-3xl font-bold text-secundaria mb-1">
                    {value}
                  </p>
                  <p className="text-muted text-xs leading-snug">{label}</p>
                </div>
              ))}
            </div>

            {/* Formação */}
            <div className="bg-cardlight border border-white/5 rounded-xl p-6 space-y-5">
              <p className="font-mono text-xs text-secundaria tracking-widest uppercase mb-2">
                Education
              </p>

              {[
                {
                  title: "Systems Analysis & Development",
                  org: "Gran Faculdade",
                  period: "Expected Aug/2025",
                  icon: "🎓",
                },
                {
                  title: "Electrical Distribution Network Technician",
                  org: "SENAI/SE",
                  period: "Expected Sep/2025",
                  icon: "⚡",
                },
                {
                  title: "Electrical Technician",
                  org: "CPET",
                  period: "Expected Sep/2025",
                  icon: "🔌",
                },
              ].map(({ title, org, period, icon }) => (
                <div key={title} className="flex gap-4 items-start">
                  <span className="text-xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-extras text-sm font-semibold">{title}</p>
                    <p className="text-muted text-xs">{org} · {period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experiência */}
            <div className="bg-cardlight border border-white/5 rounded-xl p-6 space-y-5">
              <p className="font-mono text-xs text-secundaria tracking-widest uppercase mb-2">
                Experience
              </p>

              {[
                {
                  role: "Power Platform Developer",
                  company: "Energisa/SE",
                  period: "Oct 2024 – Nov 2025",
                  note: "5 systems in production",
                  icon: "⚡",
                },
                {
                  role: "Freelance Developer",
                  company: "DW Tech",
                  period: "Jun 2024 – Sep 2024",
                  note: "React, Java, Spring Boot",
                  icon: "💻",
                },
              ].map(({ role, company, period, note, icon }) => (
                <div key={role} className="flex gap-4 items-start">
                  <span className="text-xl mt-0.5">{icon}</span>
                  <div>
                    <p className="text-extras text-sm font-semibold">{role}</p>
                    <p className="text-muted text-xs">{company} · {period}</p>
                    <p className="text-secundaria text-xs mt-0.5">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
