const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 px-6 py-4 rounded-2xl text-lg font-semibold hover:scale-105 hover:bg-cyan-500 transition duration-300"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;