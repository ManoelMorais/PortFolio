import Foto from "../assets/ola.webp"


export default function About() {
  return (
    <div id="perfil">
      <div className="lg:px-16 flex flex-col md:flex-row items-center py-20 gap-5 ">
        <div className="md:w-1/2 max-lg:px-20">
          <img src={Foto} alt="my photograph"/>
          <h1>My Photograph</h1>
        </div>
        <div className="m-10 md:w-1/2 text-justify">
            <h2 className="text-xl text-headingcolor font-semibold mb-5">
              My studies
            </h2>
            <h5>University</h5>
            <p>system analysis and development</p>
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold mt-5">
              My profile
            </h2>
            <p className="mt-8 md:pr-8 mb-8">
              Hello, my name is Manoel Almeida de Morais, I'm 18 years old,
              passionate about games, cats, and technology. Since I was young,
              I've always enjoyed these things, and in the last year, I decided
              to dive into the world of programming. During this time, I've
              learned many things that I never thought I would understand.
              <br /> <br />
              I also invest my money, always thinking about my future rather
              than just the weekend. I really like Formula 1 more than soccer,
              haha. I enjoy going out and experiencing various adventures, with
              many stories to tell.
              <br />
              <br />
              Just one more person trying to become a full stack in this crazy
              world.
            </p>
        </div>
      </div>
    </div>
  );
}
