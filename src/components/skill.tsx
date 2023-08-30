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
    {
      id: 12,
      image: "/mongo_icon.png",
    },
  ];

export default function Skills() {
  return (
    <div className="lg:mx-14 py-32" id="estudos">
      <div className="px-10">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          My Skills
        </p>
        <h2><i>Studying and Practicing:</i></h2>
      </div>
      <div className="flex justify-between m-10 gap-5 flex-wrap ">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bgShade rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt=""
              className="w-20 h-20 p-3 bg-white rounded-lg shadow-md mb-7 border-solid border-2 border-black"
            />
          </div>
        ))}
      </div>
      <div className="px-10">
        <h2><i>Studying:</i></h2>
      </div>
      <div className="flex justify-between m-10 gap-5 flex-wrap">
        {studying.map((studying) => (
          <div
            key={studying.id}
            className="bg-bgShade  rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={studying.image}
              alt=""
              className="w-20 h-20 p-3 bg-white rounded-lg shadow-md mb-7 border-solid border-2 border-black"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
