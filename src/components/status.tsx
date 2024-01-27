import { MdOutlineLanguage } from "react-icons/md";
import { GiConqueror } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";

export default function AboutMe() {
  return (
    <div className="bg-principal text-extras p-10">
      <div className="flex flex-wrap justify-center gap-40">
        <div className="text-center">
            <h2 className="text-3xl my-5 flex items-center justify-center gap-5">Language <MdOutlineLanguage /> </h2>
            <ul>
              <li className="mb-2">English - Beginner to intermediate</li>
              <li className="mb-2">Spanish - Intermediate</li>
            </ul>
        </div>
        <div className="text-center">
            <h2 className="text-3xl my-5 flex items-center justify-center gap-5">Go <GiConqueror /> al </h2>
            <ul>
              <li>Full-Stack Developer </li>
            </ul>
        </div>
        <div className="text-center">
            <h2 className="text-3xl my-5 flex items-center justify-center gap-5"><MdEngineering /> Skills </h2>
            <ul>
              <li className="mb-2">Communication Troubleshooting</li>
              <li className="mb-2">Programming languages</li>
              <li className="mb-2">Project planning</li>
              <li className="mb-2">Problem solving</li>
              <li className="mb-2">Get angry</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
