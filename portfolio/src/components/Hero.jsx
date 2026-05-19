import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-900 via-black to-purple-900 animate-pulse opacity-40"></div>

      {/* 👋 Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-cyan-400">Venkat Simma</span> 👋
      </motion.h1>

      {/* 🧠 Description */}
      <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-xl">
        I build modern, responsive web applications with clean UI and scalable backend systems.
      </p>

      {/* ✨ Typewriter */}
      <p className="mt-6 text-cyan-300 text-2xl font-semibold">
        <Typewriter
          words={[
            "Full Stack Developer",
            "React Developer",
            "MERN Stack Learner",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </p>

      {/* 🔘 Buttons */}
      <div className="mt-8 flex gap-5 flex-wrap justify-center">

        {/* View Projects */}
        <a
          href="#projects"
          className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition"
        >
          View My Work
        </a>

        {/* View Resume (opens in new tab) */}
        <a
          href="/Venkat_Simma_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black hover:shadow-lg transition"
        >
          View Resume
        </a>

      </div>

      {/* 💬 Floating Hire Me Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-cyan-500 text-black px-5 py-3 rounded-full font-semibold shadow-lg hover:scale-110 transition"
      >
        Hire Me 💬
      </a>

    </section>
  );
}

export default Hero;