export default function About() {
  return (
    <div id="perfil">
      <div className="flex flex-col md:flex-row items-center py-20 gap-5 bg-terciario">
        <div className="md:w-1/2 max-lg:px-20">
          <h1>My Photograph</h1>
        </div>
        <div className="m-10 md:w-1/2 text-justify text-xl">
            <h2 className="text-3xl mb-5 text-headingcolor">
              My studies
            </h2>
            <h5 className="indent-3">University:</h5>
            <p>System Analysis And Development</p>
            <h2 className="md:text-5xl text-4xl mt-5 text-headingcolor">
              My profile
            </h2>
            <p className="mt-8 md:pr-8 indent-3">
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
