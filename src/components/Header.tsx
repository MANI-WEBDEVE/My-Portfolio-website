"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const handleOpenSideNavBar = () => {
    let ctx = gsap.context(() => {
      gsap.to(".side-bar", {
        translateX: "0%",
        duration: 1,
        ease: "power2.inOut",
      });
    });
  };
  const handleCloseSideNavBar = () => {
    let ctx = gsap.context(() => {
      gsap.to(".side-bar", {
        translateX: "100%",
        duration: 6,
        dela: 1,
        ease: "elastic.inOut(1, 1)",
      });
    });
  };

  return (
    <>
      <header className="top-0 z-50 mx-0  rounded-b-xl  max-w-7xl md:sticky md:top-4 bg-white px-4  py-3 md:rounded-xl md:mx-10">
        <nav className="flex items-center justify-between text-[#0F172A] ">
          <div>
            <ul className="">
              <li>
                <Link
                  href={"/"}
                  aria-label="home-page"
                  className=" text-[25px] font-extrabold"
                >
                  M-Inam
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden block">
            <HiOutlineMenu
              className="text-2xl"
              onClick={handleOpenSideNavBar}
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-3 font-semibold ">
              <li className="flex items-center gap-2 relative px-3 py-2 group">
                <Link
                  href={"/about"}
                  aria-label="home-page"
                  className="z-[1] relative"
                >
                  About
                </Link>
                <span className="absolute bottom-0 left-0 bg-yellow-400 w-full h-1 rounded-lg transition-all duration-300 ease-out group-hover:h-full"></span>
              </li>
              <span className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline" aria-hidden="true">/</span>
              <li className="flex items-center gap-2 relative px-3 py-2 group">
                <Link
                  href={"/blog"}
                  aria-label="home-page"
                  className="z-[1] relative"
                >
                  Blog
                </Link>
                <span className="absolute bottom-0 left-0 bg-yellow-400 w-full h-1 rounded-lg transition-all duration-300 ease-out group-hover:h-full"></span>
              </li>
              <span className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline" aria-hidden="true">/</span>

              <li className="flex items-center gap-2 relative px-3 py-2 group">
                <Link
                  href={"/projects"}
                  aria-label="home-page"
                  className="z-[1] relative"
                >
                  Projects
                </Link>
                <span className="absolute bottom-0 left-0 bg-yellow-400 w-full h-1 rounded-lg transition-all duration-300 ease-out group-hover:h-full"></span>
              </li>
              <Link
                href="#"
                className="w-full relative px-5 py-2 font-semibold text-gray-900 border border-gray-900 rounded-md bg-white overflow-hidden group hover:text-black transform transition-transform duration-300 ease-out  hover:scale-105"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transition-all duration-300 ease-out group-hover:h-full group-hover:bottom-0"></span>
                <span className="relative items-center flex gap-2 justify-center">
                  Resume
                  <MdArrowOutward />
                </span>
              </Link>
            </ul>
          </div>
        </nav>
      </header>

      <div className="w-full h-screen bg-white fixed top-0 z-[90] translate-x-[100%] text-black side-bar ">
        <div className="flex items-end justify-between flex-col px-7 py-4">
          <div className="flex items-center w-full ">
            <IoClose className="text-3xl" onClick={handleCloseSideNavBar} />
          </div>
          <ul className="flex items-center gap-10 font-semibold flex-col text-5xl ">
            <li
              className="flex items-center gap-2 relative px-3 py-2 group"
              onClick={handleCloseSideNavBar}
            >
              <Link
                href={"/about"}
                aria-label="home-page"
                className="z-[1] relative"
              >
                About
              </Link>
              <span className="absolute bottom-[-10%] left-0 bg-yellow-400 w-full h-[1px] rounded-lg transition-all duration-300 ease-out group-hover:h-full"></span>
            </li>

            <li
              className="flex items-center gap-2 relative px-3 py-2 group "
              onClick={handleCloseSideNavBar}
            >
              <Link
                href={"/blog"}
                aria-label="home-page"
                className="z-[1] relative"
              >
                Blog
              </Link>
              <span className="absolute bottom-[-10%] left-0 bg-yellow-400 w-full h-[1px] rounded-lg transition-all duration-300 ease-out group-hover:h-full"></span>
            </li>

            <li
              className="flex items-center gap-2 relative px-3 py-2 group"
              onClick={handleCloseSideNavBar}
            >
              <Link
                href={"/projects"}
                aria-label="home-page"
                className="z-[1] relative"
              >
                Projects
              </Link>
              <span className="absolute bottom-[-10%] left-0 bg-yellow-400 w-full h-[1px] rounded-lg transition-all duration-300 ease-out group-hover:h-full"></span>
            </li>
            <Link
              href="#"
              className="w-full relative px-5 py-2 font-semibold text-gray-900 border border-gray-900 rounded-md bg-white overflow-hidden group hover:text-black transform transition-transform duration-300 ease-out  hover:scale-105 text-3xl"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transition-all duration-300 ease-out group-hover:h-full group-hover:bottom-0"></span>
              <span
                className="relative items-center flex gap-2 justify-center"
                onClick={handleCloseSideNavBar}
              >
                Resume
                <MdArrowOutward />
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
