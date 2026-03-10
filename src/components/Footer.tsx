import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-principal border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Nome */}
        <div>
          <p className="font-display text-extras font-bold text-lg">
            MM<span className="text-secundaria">.</span>
          </p>
          <p className="text-muted text-xs mt-1">
            Manoel Almeida de Morais · Aracaju/SE
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/manoel-almeida-a90054267/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-extras/30 hover:text-secundaria transition-colors duration-300"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/ManoelMorais"
            target="_blank"
            rel="noopener noreferrer"
            className="text-extras/30 hover:text-secundaria transition-colors duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.instagram.com/_manoel_almeida/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-extras/30 hover:text-secundaria transition-colors duration-300"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://blog-mu-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-extras/30 hover:text-secundaria text-xs font-mono transition-colors duration-300 ml-2"
          >
            Blog →
          </a>
        </div>

        <p className="text-muted text-xs">
          Built with React · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
