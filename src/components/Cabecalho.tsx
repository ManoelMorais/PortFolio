import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Cabecalho() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home",     href: "#home" },
    { name: "About",    href: "#about" },
    { name: "Skills",   href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact",  href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-principal/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="font-display text-xl font-bold text-extras tracking-tight">
          MM<span className="text-secundaria">.</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-body text-extras/70 hover:text-secundaria transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Ícones sociais desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/manoel-almeida-a90054267/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-extras/60 hover:text-secundaria transition-colors duration-300"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/ManoelMorais"
            target="_blank"
            rel="noopener noreferrer"
            className="text-extras/60 hover:text-secundaria transition-colors duration-300"
          >
            <FaGithub size={18} />
          </a>
        </div>

        {/* Hamburguer mobile */}
        <button
          className="md:hidden text-extras"
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3BottomRightIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-principal/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-extras/80 hover:text-secundaria text-lg font-body transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/manoel-almeida-a90054267/" target="_blank" rel="noopener noreferrer" className="text-extras/60 hover:text-secundaria transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/ManoelMorais" target="_blank" rel="noopener noreferrer" className="text-extras/60 hover:text-secundaria transition-colors">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
