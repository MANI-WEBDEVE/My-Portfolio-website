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
        ease: "back.out(2)",
      });
    });
  };
  const handleCloseSideNavBar = () => {
    let ctx = gsap.context(() => {
      gsap.to(".side-bar", {
        translateX: "100%",
        duration: 2,
        ease: "elastic.inOut(2, 1)",
      });
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0   right-0 z-[999] mx-auto rounded-b-xl max-w-7xl md:sticky md:top-4 bg-white/90 backdrop-blur-sm px-4 py-3 md:rounded-xl md:mx-auto md:w-[95%]">
        <nav className="flex items-center justify-between text-[#0F172A]">
          <div>
            <ul>
              <li>
                <Link 
                  href={"/"}
                  aria-label="home-page"
                  className="text-xl sm:text-2xl md:text-[25px] font-extrabold"
                >
                  M-Inam
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden block">
            <HiOutlineMenu
              className="text-2xl cursor-pointer hover:text-yellow-500 transition-colors"
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

      <div className="w-full h-screen bg-white/95 backdrop-blur-md fixed top-0 right-0 z-[1002] translate-x-[100%] text-black side-bar ">
        <div className="flex flex-col h-full px-4 sm:px-7 py-4">
          <div className="flex justify-end w-full">
            <IoClose className="text-2xl sm:text-3xl cursor-pointer hover:text-yellow-500 transition-colors" onClick={handleCloseSideNavBar} />
          </div>
          <ul className="flex flex-col items-center justify-center flex-1 gap-6 sm:gap-10 font-semibold text-3xl sm:text-4xl md:text-5xl">
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
              className="w-auto relative px-4 sm:px-5 py-2 font-semibold text-gray-900 border border-gray-900 rounded-md bg-white overflow-hidden group hover:text-black transform transition-transform duration-300 ease-out hover:scale-105 text-2xl sm:text-3xl"
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
