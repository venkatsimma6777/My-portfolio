export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
    >
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
        Venkat Simma 👋
      </h1>

      {/* Role */}
      <h2 className="text-xl md:text-2xl text-gray-300 mt-4 font-semibold tracking-wide">
        Full Stack Developer
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-xl mt-6 leading-relaxed">
        I build modern, responsive web applications with clean UI and scalable backend systems.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">

        <a
          href="#projects"
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition shadow-lg"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-2 border border-white/20 hover:bg-white/10 rounded-full transition"
        >
          Contact Me
        </a>

      </div>

      {/* subtle glow accent */}
      <div className="absolute w-72 h-72 bg-purple-600/20 blur-3xl rounded-full top-20 left-10 -z-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full bottom-20 right-10 -z-10"></div>
    </section>
  );
}