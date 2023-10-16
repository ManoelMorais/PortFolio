export default function AboutMe() {
  return (
    <div className="bg-azul-petroleo text-white p-10">
      <div className="flex flex-wrap justify-center">
        <div className="my-10 mx-10 text-center">
            <h2 className="font-semibold m-5">Language</h2>
            <ul className="font-robot" >
              <li>English.......Beginner to intermediate</li>
              <li>Spanish.......Intermediate</li>
              <li>Italian.......Beginner</li>
            </ul>
        </div>
        <div className="my-10 mx-10 text-center">
            <h2 className="font-semibold m-5">Goal</h2>
            <ul className="font-robot" >
              <li>Full-Stack Developer</li>
            </ul>
        </div>
        <div className="my-10 mx-10 text-center">
            <h2 className="font-semibold m-5">Skills</h2>
            <ul className="font-robot" >
              <li>Project planning</li>
              <li>Communication Troubleshooting</li>
              <li>Programming languages</li>
              <li>Problem solving</li>
              <li>Get angry</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
