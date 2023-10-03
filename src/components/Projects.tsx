const project = [
    {
      id: 1,
      name: "Game",
      description:
        "made in pure js to learn, linguages using HTML, CSS and JavaScitp",
      image: "/ping_pong.png",
      link:"https://manoelmorais.github.io/Ping-Pong/",
      git:"https://github.com/ManoelMorais/Ping-Pong",
    },
    {
      id: 2,
      name: "Infors",
      description:
        "Practice, linguages Next.js",
      image: "/infors.png",
      link:"https://pro-infors.vercel.app/",
      git:"https://github.com/ManoelMorais/Pro-infors",
    },
    {
      id: 3,
      name: "Clock",
      description:
        "using js to practice dates, linguages using HTML, CSS and JavaScitp",
      image: "/relogio.png",
      link:"https://manoelmorais.github.io/Pro-Relogio/",
      git:"https://github.com/ManoelMorais/Pro-Relogio",
    },
  ];

export default function Portfolio() {
  return (
    <div className="lg:mx-12 mx-4 my-32 bg font-robot" id="projetos">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <h2 className="md:text-3xl text-4xl text-headingcolor font-bold">
            Best Projects
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {
            project.map(project => <div key={project.id} className="shadow-xl rounded-lg">
              <img src={project.image} alt="" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor">{project.name}</h3>
                <p className="text-body mb-4">{project.description}</p>
                <a href={project.link} className="underline underline-offset-8">View Project</a>
                <a href={project.git} className="underline underline-offset-8 mx-5">View GitHub</a>
              </div>
            </div>)
          }
      </div>
    </div>
  );
}

