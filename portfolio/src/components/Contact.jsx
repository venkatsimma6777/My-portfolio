function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-center"
    >

      <h2 className="text-4xl font-bold text-cyan-400 mb-8">
        Contact Me
      </h2>

      <p className="text-gray-400 mb-10 text-lg">
        Interested in working together or have a project idea?
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        <a
          href="mailto:Venkatsimma67@gmail.com"
          className="bg-cyan-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Send Email
        </a>

        <a
          href="https://github.com/venkatsimma6777"
          target="_blank"
          className="border border-cyan-500 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/venkatsimma/"
          target="_blank"
          className="border border-cyan-500 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500 transition"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
}

export default Contact;