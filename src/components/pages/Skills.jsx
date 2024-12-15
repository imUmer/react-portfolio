import React from "react";
import SignBadge from "../badges/SignBadge";
import Text from "../Headings/Text";
import card from "../../img/svg/book-and-person-summer-svgrepo-com.svg";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills.",
    skills: ["React", "Tailwind", "CSS"],
    image: card,
  },
  {
    id: 2,
    name: "E-Commerce App",
    description: "A full-stack e-commerce application with a payment gateway.",
    skills: ["Node.js", "Express", "MongoDB", "React"],
    image: card,
  },
  {
    id: 3,
    name: "Blogging Platform",
    description: "A platform for creating and sharing blogs with rich text editing.",
    skills: ["Next.js", "Firebase", "Tailwind"],
    image: card,
  },
  {
    id: 4,
    name: "Chat Application",
    description: "A real-time chat application using WebSocket.",
    skills: ["Socket.IO", "Node.js", "React"],
    image: card,
  },
];

export default function Skills() {
  return (
    <div id="skills" className="px-3">
      {/* Header Section */}
      <section data-aos="fade-up" className="mb-2 mx-4">
        <SignBadge sign={"Skills"} />
        <Text
          text={"Check out my featured projects"}
          size={6}
          color={"green"}
          crange={"300"}
        />
      </section>

      {/* Projects Section */}
      <section
        data-aos="fade-up"
        className="mb-2 mx-4 my-10 flex justify-center flex-wrap gap-10 md:flex-row md:w-full"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            data-aos="fade-up" // Apply animation to each card
            className="group relative rounded-lg w-72 bg-gray-400 p-6 transition-all duration-300 ease-in-out hover:w-80 shadow-lg"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                className="w-72 transition-transform duration-500 ease group-hover:scale-95 group-hover:translate-y-2"
                src={project.image}
                alt={project.name}
              />
            </div>

            {/* Text Section */}
            <div className="mt-5">
              <h3
                data-aos="fade-right" // Animate text inside the card
                className="text-lg font-semibold text-gray-800"
              >
                {project.name}
              </h3>
              <p
                data-aos="fade-left" // Animate description inside the card
                className="text-sm text-gray-600 mt-2"
              >
                {project.description}
              </p>

              {/* Skills as Tags */}
              <div
                className="mt-2 flex flex-wrap gap-2"
              >
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
