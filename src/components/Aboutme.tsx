export default function AboutMe() {
  return (
    <div className="lg:mx-12 mx-4 p-10 flex items-center justify-center content-center bg-bgShade bg-slate-900 text-white shadow-md rounded-lg">
      <div className="flex sm:flex-row md:gap-24 flex-wrap">
        <div className="pt-7 m-10 gap-5">
          <h3 className="text-xl text-headingcolor font-semibold mb-5 flex justify-center">
            Idioma
          </h3>
          <ul>
            <li>English</li>
            <li>Portuguese</li>
            <li>Italian</li>
          </ul>
        </div>
        <div className="pt-7  m-10 gap-5">
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
