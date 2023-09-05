import React from "react";
import { skillsData } from "@/data/skillsData";
import Image from "next/image";
import avatar from "../assets/avatar.jpg";
const Skills = () => {
  return (
    <div
      id="skill"
      className="flex flex-col mt-4 px-2 items-center w-full pt-16 lg:px-64  gap-4 font-Poppins min-h-screen   "
    >
      <p className="text-2xl font-semibold dark:text-white">Skills</p>
      <div className="flex flex-wrap items-center justify-between  px-4 lg:px-16 lg:gap-8 gap-5">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col gap-1 items-center ">
            <Image
              src={skill.image}
              alt={skill.caption}
              height={75}
              width={75}
            />
            <p className="dark:text-white">{skill.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
