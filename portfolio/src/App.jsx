import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-black text-white">

      {/* 🧭 Navbar (fixed on top) */}
      <Navbar />

      {/* 👋 Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 🧠 About Section */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Hi, I'm Venkat Simma, a passionate Full Stack Web Developer currently learning React, Node.js, MongoDB, and Tailwind CSS.
          I enjoy building modern websites, solving coding problems, and improving my development skills through projects and internships.
        </p>
      </section>

      {/* ⚡ Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* 💼 Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-cyan-300">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">Built using React & Tailwind CSS</p>
          </div>

          <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-cyan-300">Weather App</h3>
            <p className="text-gray-400 mt-2">API-based weather forecasting app</p>
          </div>

          <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-cyan-300">To-Do App</h3>
            <p className="text-gray-400 mt-2">Task manager with local storage</p>
          </div>

        </div>
      </section>

      {/* 📬 Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-6">
          Interested in working together or have a project idea?
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:youremail@gmail.com"
            className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Send Email
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* © Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © 2026 Venkat Simma. All rights reserved.
      </footer>

    </div>
  );
}

export default App;