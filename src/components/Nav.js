"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { LuAlignJustify } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";
import DarkMode from "./DarkMode";

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

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function scroll(id) {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <nav className=" fixed flex items-center justify-between border sm:justify-around sm:h-14 font-semibold text-lg h-12 px-2 text-[#3a4151]  dark:bg-[#21222c] bg-[#ffffff] dark:border-none dark:text-[#ffffff] font-Poppins shadow-sm w-[100vw] top-0 ">
        <div
          className="dark:text-[#ffb703] text-[#3F72AF] font-Poppins text-2xl font-extrabold cursor-pointer"
          onClick={() => scroll("home")}
        >
          SAHIL
        </div>

        <section className=" gap-4 hidden sm:flex">
          <div
            className="dark:hover:bg-[#393942] p-1 rounded-lg  hover:underline hover:bg-zinc-100 cursor-pointer"
            onClick={() => scroll("home")}
          >
            Home
          </div>
          <div
            className="dark:hover:bg-[#393942] p-1 rounded-lg  hover:underline hover:bg-zinc-100 cursor-pointer"
            onClick={() => scroll("about")}
          >
            About
          </div>
          <div
            className="dark:hover:bg-[#393942] p-1 rounded-lg  hover:underline hover:bg-zinc-100 cursor-pointer"
            onClick={() => scroll("skill")}
          >
            Skills
          </div>
          <div
            className="dark:hover:bg-[#393942] p-1 rounded-lg hover:underline hover:bg-zinc-100 cursor-pointer"
            onClick={() => scroll("projects")}
          >
            Projects
          </div>
          <DarkMode />
        </section>

        <section className="sm:hidden flex relative justify-end  ">
          <LuAlignJustify
            className="h-8 w-8  dark:text-white cursor-pointer"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        </section>
      </nav>
      {isOpen && (
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="fixed right-0 left-0 top-0 my-2 px-4 min-w-[50px] min-h-40 flex-col flex z-30 bg-[#ffffff] gap-2  py-4 justify-center ease-in rounded-lg border mx-2 text-lg shadow-lg dark:bg-[#21222c] dark:text-white dark:border-none font-Poppins"
        >
          <div className="flex justify-between items-center gap-2">
            <div
              className="dark:hover:bg-[#393942] p-1 rounded-lg w-full hover:bg-zinc-100 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                scroll("home");
              }}
            >
              Home
            </div>
            <RiCloseLine
              className="h-10 w-10 dark:text-white cursor-pointer  "
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div
            className="dark:hover:bg-[#393942] p-1 rounded-lg hover:bg-zinc-100 cursor-pointer"
            onClick={() => {
              scroll("about");
              setIsOpen(false);
            }}
          >
            About
          </div>
          <div
            className="dark:hover:bg-[#393942] p-1 rounded-lg hover:bg-zinc-100 cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              scroll("skill");
            }}
          >
            Skills
          </div>
          <div
            className="dark:hover:bg-[#393942] p-1 rounded-lg hover:bg-zinc-100 cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              scroll("projects");
            }}
          >
            Projects
          </div>
          <div className="border"></div>
          <div>
            <DarkMode onClick={() => setIsDarkMode(() => !DarkMode)} />
          </div>
        </motion.div>
      )}
    </>
  );
};
