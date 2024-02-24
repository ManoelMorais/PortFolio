import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const skills = [
  {
    id: 0,
    image: "/src/assets/imges/git.png",
  },
  {
    id: 1,
    image: "/src/assets/imges/html_icon.png",
  },
  {
    id: 2,
    image: "/src/assets/imges/css-icon.png",
  },
  {
    id: 3,
    image: "/src/assets/imges/javascript_icon.png",
  },
  {
    id: 4,
    image: "/src/assets/imges/typescriptl_icon.png",
  },
  {
    id: 5,
    image: "/src/assets/imges/reactjs_icon.png",
  },
  {
    id: 6,
    image: "/src/assets/imges/tailwind_icon.png",
  },
  {
    id: 18,
    image: "/src/assets/imges/angular.png",
  },
  {
    id: 7,
    image: "/src/assets/imges/sql_icon.png",
  },
  {
    id: 9,
    image: "/src/assets/imges/node_icon.png",
  },
  {
    id: 11,
    image: "/src/assets/imges/docker.png",
  },
];
const studying = [
  {
    id: 8,
    image: "/src/assets/imges/nextjs_icon.png",
  },
  {
    id: 10,
    image: "/src/assets/imges/java_icon.png",
  },
  {
    id: 11,
    image: "/src/assets/imges/android.png",
  },
  {
    id: 10,
    image: "/src/assets/imges/ubuntu.png",
  },
  {
    id: 19,
    image: "/src/assets/imges/spring-boot.png",
  }
];

const learnNot = [
  {
    id: 17,
    image: "/src/assets/imges/python_icon.png",
  },
];

export default function Skills() {
  return (
    <div id="estudos">
      <div className="bg-terciario py-40">
        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-4xl font-bold mb-5 flex justify-center text-headingcolor">
              My Technology Skills
            </h2>
            <p className="text-xl flex items-center gap-5 pt-10">
              <MdKeyboardDoubleArrowDown /> I have already studied and am
              practicing <MdKeyboardDoubleArrowDown />
            </p>
          </div>
          <div className="flex m-10 gap-x-10 flex-wrap justify-center ">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-bgShade rounded-lg cursor-pointer transition-transform hover:scale-125 duration-300"
              >
                <img
                  src={skill.image}
                  alt="itens que eu já estudei e estou praticando"
                  className="w-20 h-20 p-3 bg-white rounded-lg mb-7 border-solid border-2 "
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-xl flex items-center gap-5">
              <MdKeyboardDoubleArrowDown /> Studying{" "}
              <MdKeyboardDoubleArrowDown />
            </p>
          </div>
          <div className="flex  m-10 gap-x-10 flex-wrap justify-center">
            {studying.map((studying) => (
              <div
                key={studying.id}
                className="bg-bgShade  rounded-lg cursor-pointer transition-transform hover:scale-125  duration-300"
              >
                <img
                  src={studying.image}
                  alt="itens que ainda estou estudando"
                  className="w-20 h-20 p-3 bg-white rounded-lg  mb-7 border-solid border-2"
                />
              </div>
            ))}
          </div>
          <div>
            <p className="text-xl flex items-center gap-5">
              <MdKeyboardDoubleArrowDown /> I studied, but I don't want to make
              it my main skill <MdKeyboardDoubleArrowDown />
            </p>
          </div>
          <div className="flex m-10 gap-x-10 flex-wrap justify-center ">
            {learnNot.map((learnNot) => (
              <div
                key={learnNot.id}
                className="bg-bgShade rounded-lg cursor-pointer transition-transform hover:scale-125 duration-300"
              >
                <img
                  src={learnNot.image}
                  alt="estudei, mas não quero tornar isso minha principal habilidade"
                  className="w-20 h-20 p-3 bg-white rounded-lg mb-7 border-solid border-2 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
