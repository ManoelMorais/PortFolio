export default function About() {
  return (
    <div className="lg:mx-12 mx-4 flex-wrap" id="perfil">
      <div className="flex sm:flex-row md:gap-24 gap-12 items-center">
        <div className="sm:w-1/2">
          <img src="" alt="" />
        </div>
        <div>
          <div className=" pt-7 flex flex-col m-10 sm:w1/2">
            <h2 className="text-xl text-headingcolor font-semibold mb-5">
              My studies
            </h2>
            <h5>Scool</h5>
            <p>Complete at 17 december 2022</p>
            <br />
            <h5>University</h5>
            <p>system analysis and development</p>
          </div>
          <div className="flex flex-col m-10 ">
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
              My profile
            </h2>
            <p className="mt-8 md:pr-8 mb-8">
              Olá, meu nome e Manoel Almeida de Morais, tenho 18 anos, apaixonado por jogos, gatos e tecnologia, 
              desde pequeno sempre gostei dessas coisas, e no ultimo ano resolvir entrar nesse mundo da programção
              e nesse tempo aprendi muitas coisas que já mais pensei em como funcionava.
              <br /> <br />
              Eu também invisto meu dinheiro, sempre pensando no meu futuro e não no final de semana, gosto muito de formula 1, 
              mas do que futbol kkkk, gosto de sair, experimentar várias aventuras, diversas histórias para conta inclusive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
