export default function AboutMe() {
  return (
    <div className="mx-4  flex  justify-center bg-slate-900 text-white  rounded-lg">
      <div className="flex flex-wrap">
        <div className="pt-7 m-10 gap-5">
          <h3 className="text-xl text-headingcolor font-semibold mb-5 flex justify-center">
            Idioma
          </h3>
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>Italian</li>
          </ul>
        </div>
        <div className="pt-7 m-10 gap-5">
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
        <div className="pt-7 m-10 gap-5">
          <h3 className="text-xl text-headingcolor font-semibold mb-5 flex justify-center ">Goal</h3>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}
