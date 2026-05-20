const projects = [
  {
    title: "E-Commerce App",
    desc: "Full-stack MERN shopping app with authentication, cart system, and responsive UI",
    github: "https://github.com/venkatsimma6777",
    live: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Modern responsive portfolio built using React and Tailwind CSS with smooth UI",
    github: "https://github.com/venkatsimma6777/My-portfolio",
    live: "#"
  },
  {
    title: "Task Manager App",
    desc: "Productivity app with user authentication and task management features",
    github: "https://github.com/venkatsimma6777",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 text-center">

      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition duration-300"
          >
            <h3 className="text-purple-300 font-semibold text-lg">
              {p.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {p.desc}
            </p>

            <div className="flex gap-3 justify-center mt-4 flex-wrap">

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 border border-white/20 rounded-full text-sm hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href={p.live}
                className="px-4 py-1 bg-purple-600 rounded-full text-sm hover:bg-purple-700"
              >
                Live
              </a>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}