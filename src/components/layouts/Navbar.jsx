import React from "react";

export default function Navbar() {
  return (
    <div
      className="max-lg:hidden"
    >
      <section
        id="nav"
        className="backdrop-blur-md bg-slate-500/30 z-20 rounded-md p-4 text-black shadow-lg m-5"
      >
        <ul className="flex gap-5">
          <a
            className="bg-slate-500/5 p-1 px-2 rounded-md hover:bg-slate-500/10 hover:text-green-200 border-spacing-3 border-slate-300"
            href="#"
          >
            Home
          </a>
          <a
            className="bg-slate-500/50 p-1 px-2 rounded-md hover:bg-slate-500/40 hover:text-green-200"
            href="#about"
          >
            About
          </a>
          <a
            className="bg-slate-500/50 p-1 px-2 rounded-md hover:bg-slate-500/40 hover:text-green-200"
            href="#"
          >
            Skills
          </a>
        </ul>
      </section>
    </div>
  );
}