const project = [
  {
    id: 1,
    name: "Game",
    description:
      "made in pure js to learn, linguages using HTML, CSS and JavaScipt",
    image: "images/ping_pong.png",
    link: "https://manoelmorais.github.io/Ping-Pong/",
    git: "https://github.com/ManoelMorais/Ping-Pong",
  },
  {
    id: 2,
    name: "Controle Financeiro",
    description: "Practice, linguages React.js.",
    image: "images/Financeiro.png",
    link: "https://pro-financeiro.vercel.app/",
    git: "https://github.com/ManoelMorais/Pro-financeiro",
  },
  {
    id: 3,
    name: "Clock",
    description:
      "using js to practice dates, linguages using HTML, CSS and JavaScipt",
    image: "images/relogio.png",
    link: "https://manoelmorais.github.io/Pro-Relogio/",
    git: "https://github.com/ManoelMorais/Pro-Relogio",
  },
];

export default function Portfolio() {
  return (
    <div id="projetos">
      <div className="bg-terciario">
        <div className="mx-10">
          <div className="mb-20">
              <h2 className="text-4xl text-headingcolor">Best Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {project.map((project) => (
              <div key={project.id} className="shadow-xl rounded-lg hover:scale-110 duration-500 cursor-pointer">
                <img src={project.image} alt="" />
                <div className="p-8">
                  <h3 className="text-2xl mb-2 text-headingcolor">
                    {project.name}
                  </h3>
                  <p className="text-body text-xl mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="underline underline-offset-8"
                  >
                    View Project
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    className="underline underline-offset-8 mx-5"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
