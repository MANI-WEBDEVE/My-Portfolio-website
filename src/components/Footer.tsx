import React from "react";
import Bounded from "./Bounded";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Bounded as="footer" className="">
        <footer className=" flex flex-col items-center justify-between gap-5 w-full sm:flex-row sm:justify-between ">
          <div className="flex items-center  flex-col gap-1 sm:flex-row ">
            <h2 className="text-2xl font-extrabold hover:text-yellow-500 ">
              <Link href="/" className="hover:text-yellow-500 transition-colors">M-Inam</Link>
            </h2>
            <span
              className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
            <p className="text-sm">© 2024 Muhammad Inam</p>
          </div>
          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-4 font-bold">
              <li><Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link></li>
              <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                /
              </span>
              <li><Link href="/blog" className="hover:text-yellow-500 transition-colors">Blog</Link></li>
              <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                /
              </span>
              <li><Link href="/projects" className="hover:text-yellow-500 transition-colors">Projects</Link></li>
              <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                /
              </span>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <Link href={"https://github.com/MANI-WEBDEVE"} target="_blank">
              <FaGithub className="text-2xl hover:text-yellow-500 hover:scale-125 transition-all duration-300 ease-in-out" />
            </Link>
            <Link href={"https://x.com/InamKhan132207"} target="_blank">
              <BsTwitterX className="text-2xl hover:text-yellow-500 hover:scale-125 transition-all duration-300 ease-in-out" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/muhammad-inam-6245b82a0/"}
              target="_blank"
            >
              <FaLinkedin className="text-2xl hover:text-yellow-500 hover:scale-125 transition-all duration-300 ease-in-out" />
            </Link>
          </div>
        </footer>
      </Bounded>
    </>
  );
};

export default Footer;
