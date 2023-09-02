import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="py-10 md:px-10 px-4 bg-slate-900 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          <a href="#home" className="block text-primary hover:text-cyan-400 py-2 px-4">
            Home
          </a>
          <a href="#perfil" className="block hover:text-teal-300 py-2 px-4">
            Perfil
          </a>
          <a href="#projetos" className="block  hover:text-teal-300 py-2 px-4">
            Projetos
          </a>
          <a href="#estudos" className="block  hover:text-teal-300 py-2 px-4">
            Estudos
          </a>
          <a href="https://blog-mu-one.vercel.app/" className="block  hover:text-teal-300 py-2 px-4">
            Blog
          </a>
        </div>
        <div>
          <h1 className="px-4">Manoel Almeida de Morais</h1>
          <h3 className="px-4">Aracaju/SE +79🌎</h3>
          <div className="flex items-center  gap-4 m-4">
            <a href="https://www.linkedin.com/in/manoel-almeida-a90054267/" target="_blank">
              <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
            </a>
            <a href="https://github.com/ManoelMorais" target="_blank">
              <AiFillGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
            </a>
            <a href="https://www.instagram.com/_manoel_almeida/" target="_blank">
              <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-4">
        <p>Made with 💖</p>
      </div>
    </div>
  );
}
