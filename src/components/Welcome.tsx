import logo from "../assets/fav/fundo.png";

export default function Welcome() {
  return (
    <div className="bg-principal text-extras shadow-md" id="home">
      <div className="lg:px-16 flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-5">
        <div className="md:w-1/2 w-full">
          <img src={logo} className="w-11/12 filter drop-shadow-4xl" />
        </div>
        <div className="md:w-1/2 max-lg:p-10">
          <p className="text-3xl">Olá, Holla, Hi</p>
          <h1 className="text-2xl leading-[76px]">I am Manoel Morais</h1>
          <p className="text-xl text-justify indent-3.5">
            Welcome to my portfolio! I'm a passionate programmer dedicated to
            turning lines of code into functional and innovative solutions. With
            a problem-solving mindset, I've been working on a variety of
            projects, from intuitive applications to robust systems. Feel at
            home in my world!
          </p>
        </div>
      </div>
    </div>
  );
}
