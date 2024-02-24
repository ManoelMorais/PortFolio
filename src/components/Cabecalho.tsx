import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/fav/abertura.webp"

export default function Cabecalho() {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "Profile", link: "#perfil" },
    { name: "Skill", link: "#estudos" },
    { name: "Projects", link: "#projetos" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 scroll-smooth hover:scroll-auto">
      <div className="md:flex items-center justify-between bg-principal text-extras py-4 md:px-10 px-7 scroll-smooth hover:scroll-auto">
        {/* logo section */}
        <div className="text-3xl flex items-center gap-1">
          <img className="w-14" src={logo} alt="" />
          <span>Welcome ✨</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`bg-principal md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15" : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 text-lg scroll-smooth">
              <a
                href={link.link}
                className="text-extras hover:text-hove duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
