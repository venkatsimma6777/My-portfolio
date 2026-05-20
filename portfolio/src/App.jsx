import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="text-white">

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="projects" className="py-20">
        <Projects />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>

      {/* Floating CTA */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-full shadow-lg transition"
      >
        Hire Me 🚀
      </a>

    </div>
  );
}