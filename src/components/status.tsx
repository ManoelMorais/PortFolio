export default function AboutMe() {
  return (
    <div className="bg-principal text-extras p-10">
      <div className="flex flex-wrap justify-center gap-16">
        <div className="text-center">
            <h2 className="m-5">Language</h2>
            <ul>
              <li>English.......Beginner to intermediate</li>
              <li>Spanish.......Intermediate</li>
            </ul>
        </div>
        <div className="text-center">
            <h2 className="m-5">Goal</h2>
            <ul>
              <li>Full-Stack Developer</li>
            </ul>
        </div>
        <div className="text-center">
            <h2 className="m-5">Skills</h2>
            <ul>
              <li>Communication Troubleshooting</li>
              <li>Programming languages</li>
              <li>Project planning</li>
              <li>Problem solving</li>
              <li>Get angry</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
