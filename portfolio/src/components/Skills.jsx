import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb } from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} /> },
    { name: "CSS", icon: <FaCss3Alt size={50} /> },
    { name: "JavaScript", icon: <FaJs size={50} /> },
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "GitHub", icon: <FaGithub size={50} /> },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#020617]"
    >

      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-white mb-20">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 backdrop-blur-lg hover:-translate-y-3 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-2xl transition duration-500"
          >

            <div className="text-cyan-400">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {skill.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;