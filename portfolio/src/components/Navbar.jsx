import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">

        <h1 className="text-xl font-bold text-cyan-400">
          Venkat Simma
        </h1>

        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-black/70 text-gray-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}

    </nav>
  );
}

export default Navbar;