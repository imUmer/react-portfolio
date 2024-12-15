import React, { useEffect } from "react";
import SignBadge from "../badges/SignBadge";
import PrimaryBtn from "../buttons/PrimaryBtn";

// image import
import download from "../../img/svg/download.svg";
import Text from "../Headings/Text";

export default function About() {

  return (
    <div id="about" className="px-3 h-fit">
      <section data-aos="fade-up" id="about" className="mb-2 mx-4">
        <SignBadge sign={"About Me"} />
        <Text text={"I'm Umer Niaz Full-Stack Engineer."} size={6} />
        <p className="text-black-400 text-lg leading-relaxed">
          JavaScript, React, TailwindCSS, Node.js, etc.
        </p>
        <PrimaryBtn text={"Download Resume"} icon={download} />
      </section>

      <section data-aos="fade-up" className="mb-0 mx-4 text-justify">
        <SignBadge sign={"My journey"} />
        <p
          data-aos="fade-right"
          className="text-black-400 text-lg leading-relaxed"
        >
          As a dedicated IT professional with a focus on full-stack development
          and a passion for continuous learning, I believe that the key to
          success lies in solving complex problems through technology. With
          experience across various programming languages, frameworks, and cloud
          platforms, I thrive in environments where innovation is encouraged and
          challenges are seen as opportunities.
        </p>
        <br />
        <p data-aos="fade-left"
          className="text-black-400 text-lg leading-relaxed"
          >
          My journey has been shaped by an eagerness to work on meaningful
          projects that can impact the world. Whether it's developing scalable
          APIs, creating responsive web interfaces, or working on cloud
          migrations, I strive to make a tangible difference in every task I
          take on. My goal is to contribute to solutions that drive progress and
          improve lives, with a focus on fostering collaboration, growth, and
          positive change in the tech industry.
        </p>
      </section>
    </div>
  );
}
