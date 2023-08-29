const skills = [
  {
    id: 1,
    image: "src/assets/html_icon.png",
  },
  {
    id: 2,
    image: "src/assets/css-icon.png",
  },
  {
    id: 3,
    image: "src/assets/javascript_icon.png",
  },
  {
    id: 4,
    image: "src/assets/typescriptl_icon.png",
  },
  {
    id: 5,
    image: "src/assets/tailwind_icon.png",
  },
  {
    id: 6,
    image: "/src/assets/reactjs_icon.png",
  },
];
const studying = [
    {
      id: 7,
      image: "src/assets/python_icon.png",
    },
    {
      id: 8,
      image: "src/assets/nextjs_icon.png",
    },
    {
      id: 9,
      image: "src/assets/sql_icon.png",
    },
    {
      id: 10,
      image: "src/assets/java_icon.png",
    },
    {
      id: 11,
      image: "src/assets/node_icon.png",
    },
    {
      id: 12,
      image: "/src/assets/mongo_icon.png",
    },
  ];

export default function Skills() {
  return (
    <div className="lg:mx-14 py-32" id="estudos">
      <div className="mb-20">
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
              className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7 border-solid border-2 border-black"
            />
          </div>
        ))}
      </div>
      <div className="mb-20 pt-8">
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
              className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7 border-solid border-2 border-black"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
