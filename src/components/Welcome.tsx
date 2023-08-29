import logo from "../assets/ola.webp";

export default function Welcome() {
  return (
    <div className="bg-bgShade bg-slate-900 text-white shadow-md" id="home">
      <div className="lg:px-16 flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-5">
        <div className="md:w-1/2 w-full">
          <img src={logo} alt="" className="w-full" />
        </div>
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            Olá, Holla, Hi, <span className="text-sky-700">I am Morais Manoel</span> 
          </p>
          <h1 className="font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5 text-sky-700">
            Developer passionate about technology 
          </h1>
          <p className="text-xl  mb-8 text-justify">
            Bem-vindo ao meu portfólio! Sou um programador apaixonado por
            transformar linhas de código em soluções funcionais e inovadoras.
            Com uma mente orientada para a resolução de problemas.tenho 
            trabalhado em uma variedade de projetos, desde aplicativos 
            intuitivos até sistemas robustos. Seja bem-vindo ao meu mundo!
          </p>
        </div>
      </div>
    </div>
  );
}
