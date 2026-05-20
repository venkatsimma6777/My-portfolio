export default function Contact() {
  return (
    <section id="contact" className="text-center px-6 py-24">

      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

      <p className="text-gray-400 mb-8">
        Let’s work together or build something amazing 🚀
      </p>

      <div className="flex gap-4 justify-center flex-wrap">

        {/* EMAIL */}
        <a
          href="mailto:Venkatsimma67@gmail.com"
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition"
        >
          Email Me
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/venkatsimma6777"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-white/20 hover:bg-white/10 rounded-full transition"
        >
          GitHub
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/venkatsimma/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-white/20 hover:bg-white/10 rounded-full transition"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
}