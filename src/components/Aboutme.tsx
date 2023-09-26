export default function AboutMe() {
  return (
    <div className="flex justify-center bg-azul-petroleo text-white font-robot">
      <div className="flex gap-x-32 flex-wrap max-md:justify-center max-md:content-center">
        <div className="pt-7 m-10 gap-5 bg-white text-azul-petroleo p-3 rounded-xl">
          <h3 className="text-xl text-headingcolor font-semibold mb-5 flex justify-center">
            Idioma
          </h3>
          <ul>
            <li>English: Beginner</li>
            <li>Spanish: Intermediate</li>
            <li>Italian: Beginner</li>
          </ul>
        </div>
        <div className="pt-7 m-10 gap-5  bg-white text-azul-petroleo p-3 rounded-xl">
          <h3 className="text-xl text-headingcolor font-semibold mb-5 flex justify-center ">Goal</h3>
          <p className="font-robot">Full Stack Developer</p>
        </div>
        <div className="pt-7 m-10 gap-5  bg-white text-azul-petroleo p-3 rounded-xl">
          <h3 className="text-xl text-headingcolor font-semibold mb-5 flex justify-center">
            Skills
          </h3>
          <ul>
            <li>Focus and Dedication</li>
            <li>Project Planning</li>
            <li>Comunication</li>
            <li>Problems Soluction</li>
            <li>pass the rage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
