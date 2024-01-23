"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { LuAlignJustify } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";
import DarkMode from "./DarkMode";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      easeInOut: [0.17, 0.67, 0.83, 0.67],
    },
  },
  closed: {
    y: "-101vh",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      easeInOut: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const Links = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Skills",
    link: "skill",
  },
  {
    name: "Projects",
    link: "projects",
  },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function scroll(id) {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="max-w-screen md-w-full top-0 left-0 sticky ">
      <div
        className={`md:flex items-center justify-between  py-2   md:px-60 px-7 z-20 bg-white text-[#3a4151]  dark:bg-[#21222c] dark:border-none dark:text-[#ffffff] font-Poppins shadow-sm transition-all duration-500 ease-in`}
      >
        <div className="flex items-center justify-between ">
          <div
            className="dark:text-[#ffb703] text-[#3F72AF] font-Poppins text-2xl font-extrabold cursor-pointer"
            onClick={() => scroll("home")}
          >
            SAHIL
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl   cursor-pointer  md:hidden"
          >
            {isOpen ? <RiCloseLine size={30} /> : <LuAlignJustify />}
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static $ md:z-auto -z-10 left-0 w-full md:w-auto md:pl-0 pl-9 bg-white transition-all duration-500 ease-in  ${
            isOpen ? "top-12 opacity-100" : "top-[-290px]"
          } md:opacity-100 text-[#3a4151]  dark:bg-[#21222c] bg-[#ffffff]   font-Poppins dark:text-[#ffb703]`}
        >
          {Links.map((item) => (
            <li
              className="md:ml-8 md:my-0 my-7 text-xl cursor-pointer  hover:text-gray-400 duration-500"
              onClick={() => {
                scroll(`${item.link}`);
                setIsOpen(false);
              }}
              key={item.name}
            >
              {item.name}
            </li>
          ))}
          <div className="md:pl-8 ">
            <DarkMode />
          </div>
        </ul>
      </div>
    </nav>
  );
};
