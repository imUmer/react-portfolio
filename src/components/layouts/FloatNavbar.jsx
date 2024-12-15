import React from "react";

export default function FloatNavbar() {
  return (
    <div data-aos="fade-up"
      className="fixed w-full flex justify-center items-center z-50 
                 bottom-1 transition-all duration-300"
    >
      <section
        id="nav"
        className="backdrop-blur-sm bg-slate-500/40 z-20 rounded-md p-2 px-4 text-black shadow-lg m-3"
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
            href="#"
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