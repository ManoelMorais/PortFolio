export default function About() {
  return (
    <div className="lg:mx-12 mx-4 my-24" id="perfil">
      <div className="flex sm:flex-row md:gap-24 gap-12 items-center">
        <div className="sm:w-1/2">
          <img src="" alt="" />
        </div>
        <div>
          <div className=" pt-7 flex flex-col m-10 sm:w1/2">
            <h2 className="text-xl text-headingcolor font-semibold mb-5">
              My studies
            </h2>
            <h5>University</h5>
            <p>system analysis and development</p>
          </div>
          <div className="flex flex-col m-10 ">
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
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
    </div>
  );
}
