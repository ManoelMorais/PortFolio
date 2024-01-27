const skills = [
  {
    id: 1,
    image: "/html_icon.png",
  },
  {
    id: 2,
    image: "/css-icon.png",
  },
  {
    id: 3,
    image: "/javascript_icon.png",
  },
  {
    id: 4,
    image: "/typescriptl_icon.png",
  },
  {
    id: 5,
    image: "/reactjs_icon.png",
  },
  {
    id: 6,
    image: "/tailwind_icon.png",
  },
];
const studying = [
  {
    id: 7,
    image: "/python_icon.png",
  },
  {
    id: 8,
    image: "/sql_icon.png",
  },
  {
    id: 9,
    image: "/nextjs_icon.png",
  },
  {
    id: 10,
    image: "/node_icon.png",
  },
  {
    id: 11,
    image: "/java_icon.png",
  },
];

export default function Skills() {
  return (
    <div className="bg-terciario" id="estudos">
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-2xl font-bold mb-5 flex justify-center">
            My Skills
          </h2>
          <p>
            <i>I have already studied and am practicing</i>
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
        <div className="px-10">
          <p>
            <i>Studying:</i>
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
      </div>
    </div>
  );
}
