import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-bgShade py-14 md:px-12 px-4 bg-slate-900 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20 ">
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          <a href="#home" className="block text-primary hover:text-cyan-400 py-2 px-4">
            Home
          </a>
          <a href="#perfil" className="block hover:text-cyan-400 py-2 px-4">
            Perfil
          </a>
          <a href="#projetos" className="block  hover:text-cyan-400 py-2 px-4">
            Projetos
          </a>
          <a href="#estudos" className="block  hover:text-cyan-400 py-2 px-4">
            Estudos
          </a>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <a
            href="https://www.linkedin.com/in/manoel-almeida-a90054267/"
            target="_blank"
          >
            <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
            <a href=""></a>
          </a>
          <a href="https://github.com/ManoelMorais" target="_blank">
            <AiFillGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
          <a href="https://www.instagram.com/_manoel_almeida/" target="_blank">
            <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8 border-t-4">
        <p>Made with 💖 </p>
      </div>
    </div>
  );
}
