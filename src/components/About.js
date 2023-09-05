import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

import Link from "next/link";

export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center w-full pt-16 lg:px-32  gap-4 font-Poppins min-h-screen   "
    >
      <div className="flex flex-col items-center px-4 gap-6 font-Poppins font-semibold sm:text-xl text-[#3a4151] dark:text-white">
        <p className="text-3xl">About Me</p>
        <p>
          Hi, I'm Sahil Sinhmar. I'm a Full-Stack web developer from India. I
          enjoy seeking out creative solutions to complex problems. It was back
          in late 2021 when I got interested in Web Development and decided to
          learn HTML & CSS. Fast forward to today, I learned various web
          technologies and their best practices and built several fun and
          exciting projects.
        </p>
        <p>
          I love programming because it is so practical, and I can solve
          real-world challenges with it. For me, programming is a tool to
          express myself in a creative way. Plus, there is so much to explore
          that always keeps me excited!
        </p>
        <p>
          In my free time, I get inspiration from other people's work and try
          out new technologies to build side projects. Apart from that, I also
          love sports and reading books sometimes.
        </p>
        <div className="sm:flex-row flex flex-col gap-2">
          <Link
            href="https://www.linkedin.com/in/sahilsinhmar/"
            className="flex items-center text-xl gap-2 border max-w-[150px] py-2 px-1 justify-center  rounded-lg bg-[#374151] text-white "
          >
            <SiLinkedin className="text-blue-600 h-6 w-6" />
            Linkedin
          </Link>
          <Link
            href="https://www.github.com/sahilsinhmar/"
            className="flex items-center text-xl gap-2 border max-w-[150px] py-2 px-1 justify-center  rounded-lg bg-[#374151] text-white "
          >
            <SiGithub className=" h-6 w-6" />
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};
