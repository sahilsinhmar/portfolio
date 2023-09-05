import Link from "next/link";
import React from "react";
import { GrLinkedin, GrGithub, GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full bg-[#21222c] h-[150px] flex items-center justify-center">
      <div className="flex gap-8">
        <Link href="https://www.linkedin.com/in/sahilsinhmar/">
          <GrLinkedin className="h-8 w-8 text-white" />
        </Link>
        <Link href="https://www.github.com/sahilsinhmar/">
          <GrGithub className="h-8 w-8 text-white" />
        </Link>
        <Link href="mailto:sahilsinhmar07@gmail.com">
          <GrMail className="h-8 w-8 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
