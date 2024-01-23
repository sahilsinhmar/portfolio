"use client";
import Image from "next/image";
import React from "react";
import avatar from "../assets/avatar.jpg";

function scroll(id) {
  const element = document.getElementById(`${id}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
export const Hero = () => {
  return (
    <div className="flex flex-col items-center my-20 w-full gap-5 font-Poppins min-h-[100svh] px-2 ">
      <div className="max-w-[180px] max-h-[180px] rounded-full ">
        <Image
          src={avatar}
          alt="avatar"
          height={180}
          width={180}
          className="rounded-full"
        />
      </div>
      <p className="text-lg dark:text-white dark:border-gray text-[#374151]">{`Hello I'm`}</p>
      <p className="md:text-6xl text-4xl text-center font-bold text-[#374151] dark:text-white">
        Sahil Sinhmar
      </p>
      <p className="text-center text-[#3a4151] dark:text-white px-1 lg:text-2xl lg:w-[1000px] ">
        {` Deeply invested in the life-long learning mentality, I'm a Frontend
        Developer from India who carries a keen eye for design in an user-first
        approach.`}
      </p>
      <div className="sm:flex-row flex flex-col gap-2 sm:gap-4">
        <div
          className="py-2 px-3 w-[200px] border rounded-lg text-lg bg-[#374151] text-white hover:bg-[#21222c] dark:bg-[#21222c] dark:text-white dark:border-none dark:hover:bg-[#393942] text-center cursor-pointer "
          onClick={() => scroll("about")}
        >
          More about me
        </div>

        <a
          href="/sahilsinhmar.pdf"
          className="py-2 px-3 w-[200px] border rounded-lg text-lg bg-[#374151] text-white hover:bg-[#21222c] dark:bg-[#21222c] dark:text-white dark:border-none dark:hover:bg-[#393942] text-center "
          download="sahilsinhmar.pdf"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
