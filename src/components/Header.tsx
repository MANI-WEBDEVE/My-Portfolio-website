"use client";
import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const handleOpenSideNavBar = () => {
    gsap.context(() => {
      gsap.to(".side-bar", {
        translateX: "0%",
        duration: 1,
        ease: "back.out(2)",
      });
    });
  };
  const handleCloseSideNavBar = () => {
   gsap.context(() => {
      gsap.to(".side-bar", {
        translateX: "100%",
        duration: 2,
        ease: "elastic.inOut(2, 1)",
      });
    });
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[999] mx-auto max-w-7xl rounded-b-xl bg-white/90 px-4 py-3 backdrop-blur-sm md:sticky md:top-4 md:mx-auto md:w-[95%] md:rounded-xl">
        <nav className="flex items-center justify-between text-[#0F172A]">
          <div>
            <ul>
              <li>
                <Link
                  href={"/"}
                  aria-label="home-page"
                  className="text-xl font-extrabold sm:text-2xl md:text-[25px]"
                >
                  M-Inam
                </Link>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <HiOutlineMenu
              className="cursor-pointer text-2xl transition-colors hover:text-yellow-500"
              onClick={handleOpenSideNavBar}
            />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-3 font-semibold">
              <li className="group relative flex items-center gap-2 px-3 py-2">
                <Link
                  href={"/about"}
                  aria-label="home-page"
                  className="relative z-[1]"
                >
                  About
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-full rounded-lg bg-yellow-400 transition-all duration-300 ease-out group-hover:h-full"></span>
              </li>
              <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                /
              </span>
              <li className="group relative flex items-center gap-2 px-3 py-2">
                <Link
                  href={"/blog"}
                  aria-label="home-page"
                  className="relative z-[1]"
                >
                  Blog
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-full rounded-lg bg-yellow-400 transition-all duration-300 ease-out group-hover:h-full"></span>
              </li>
              <span
                className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                aria-hidden="true"
              >
                /
              </span>

              <li className="group relative flex items-center gap-2 px-3 py-2">
                <Link
                  href={"/projects"}
                  aria-label="home-page"
                  className="relative z-[1]"
                >
                  Projects
                </Link>
                <span className="absolute bottom-0 left-0 h-1 w-full rounded-lg bg-yellow-400 transition-all duration-300 ease-out group-hover:h-full"></span>
              </li>
              <Link
                href="#"
                className="group relative w-full transform overflow-hidden rounded-md border border-gray-900 bg-white px-5 py-2 font-semibold text-gray-900 transition-transform duration-300 ease-out hover:scale-105 hover:text-black"
              >
                <span className="absolute bottom-0 left-0 h-1 w-full bg-yellow-500 transition-all duration-300 ease-out group-hover:bottom-0 group-hover:h-full"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Resume
                  <MdArrowOutward />
                </span>
              </Link>
            </ul>
          </div>
        </nav>
      </header>

      <div className="side-bar fixed right-0 top-0 z-[1002] h-screen w-full translate-x-[100%] bg-white/95 text-black backdrop-blur-md">
        <div className="flex h-full flex-col px-4 py-4 sm:px-7">
          <div className="flex w-full justify-end">
            <IoClose
              className="cursor-pointer text-2xl transition-colors hover:text-yellow-500 sm:text-3xl"
              onClick={handleCloseSideNavBar}
            />
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-6 text-3xl font-semibold sm:gap-10 sm:text-4xl md:text-5xl">
            <li
              className="group relative flex items-center gap-2 px-3 py-2"
              onClick={handleCloseSideNavBar}
            >
              <Link
                href={"/about"}
                aria-label="home-page"
                className="relative z-[1]"
              >
                About
              </Link>
              <span className="absolute bottom-[-10%] left-0 h-[1px] w-full rounded-lg bg-yellow-400 transition-all duration-300 ease-out group-hover:h-full"></span>
            </li>

            <li
              className="group relative flex items-center gap-2 px-3 py-2"
              onClick={handleCloseSideNavBar}
            >
              <Link
                href={"/blog"}
                aria-label="home-page"
                className="relative z-[1]"
              >
                Blog
              </Link>
              <span className="absolute bottom-[-10%] left-0 h-[1px] w-full rounded-lg bg-yellow-400 transition-all duration-300 ease-out group-hover:h-full"></span>
            </li>

            <li
              className="group relative flex items-center gap-2 px-3 py-2"
              onClick={handleCloseSideNavBar}
            >
              <Link
                href={"/projects"}
                aria-label="home-page"
                className="relative z-[1]"
              >
                Projects
              </Link>
              <span className="absolute bottom-[-10%] left-0 h-[1px] w-full rounded-lg bg-yellow-400 transition-all duration-300 ease-out group-hover:h-full"></span>
            </li>
            <Link
              href="#"
              className="group relative w-auto transform overflow-hidden rounded-md border border-gray-900 bg-white px-4 py-2 text-2xl font-semibold text-gray-900 transition-transform duration-300 ease-out hover:scale-105 hover:text-black sm:px-5 sm:text-3xl"
            >
              <span className="absolute bottom-0 left-0 h-1 w-full bg-yellow-500 transition-all duration-300 ease-out group-hover:bottom-0 group-hover:h-full"></span>
              <span
                className="relative flex items-center justify-center gap-2"
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
