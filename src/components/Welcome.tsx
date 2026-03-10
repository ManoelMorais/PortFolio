import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Welcome() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-principal flex items-center overflow-hidden"
    >
      {/* Grid de fundo decorativo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,153,58,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,153,58,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Círculo blur decorativo */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secundaria/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secundaria/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">

          {/* Tag de status */}
          <div className="inline-flex items-center gap-2 bg-secundaria/10 border border-secundaria/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="text-secundaria text-xs font-mono tracking-widest uppercase">
              Available for freelance
            </span>
          </div>

          {/* Nome */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-extras leading-tight mb-4 animate-fade-up">
            Manoel
            <br />
            <span className="text-secundaria">Morais</span>
          </h1>

          {/* Cargo */}
          <p className="font-mono text-sm md:text-base text-muted tracking-widest uppercase mb-6 animate-fade-up delay-100">
            Backend Java Developer · Power Platform · Aracaju/SE
          </p>

          {/* Descrição */}
          <p className="text-extras/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up delay-200">
            I build systems that actually run in production. Five applications
            deployed at Energisa/SE — one of the largest energy distributors
            in Northeast Brazil.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up delay-300">
            <a
              href="#projects"
              className="bg-secundaria text-principal font-semibold px-7 py-3 rounded-lg hover:bg-secundaria/90 transition-all duration-300 hover:shadow-lg hover:shadow-secundaria/20 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/documents/curriculo.pdf"
              download
              className="border border-extras/20 text-extras px-7 py-3 rounded-lg hover:border-secundaria hover:text-secundaria transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Sociais */}
          <div className="flex items-center gap-6 animate-fade-up delay-400">
            <a
              href="https://www.linkedin.com/in/manoel-almeida-a90054267/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-extras/40 hover:text-secundaria transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/ManoelMorais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-extras/40 hover:text-secundaria transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Seta scroll */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-extras/30 hover:text-secundaria transition-colors animate-bounce"
      >
        <HiArrowDown size={24} />
      </a>
    </section>
  );
}
