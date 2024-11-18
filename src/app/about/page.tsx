"use client"
import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import TechList from "@/components/TechList";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";

const Page = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main content
      gsap.from(".about-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Animate the avatar
      gsap.from(".avatar-container", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
      });

      // Animate education items
      gsap.from(".education-item", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        delay: 0.8,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Bounded>
        <div className="grid  gap-y-6 md:grid-cols-[2fr,1fr] items-start">
          <Heading as="h1" size="xl" className="col-start-1 about-content">
            About Inam
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert col-start-1 mt-4 space-y-4">
            <p className="about-content">
              As a dedicated full-stack developer with a strong foundation in
              both front-end and back-end technologies, I specialize in building
              high-quality, scalable web applications. I'm proficient in tools
              and frameworks like Next.js, React.js, Node.js, and Express
            </p>

            <p className="about-content">
              My passion for coding and problem-solving drives me to create
              seamless user experiences and efficient server-side functionality.
            </p>

            <p className="about-content">
              I'm eager to tackle challenging problems and am always on the
              lookout for new tools and best practices to enhance my development
              process.
            </p>
          </div>
          <Link
            href="#"
            className="about-content w-fit relative inline-block px-5 py-2 font-semibold text-gray-900 border border-gray-900 rounded-md bg-white overflow-hidden group hover:text-black transform transition-all duration-300 ease-out mt-4 hover:scale-105"
          >
            <span className="absolute bottom-0 inset-0 w-full h-1 bg-yellow-500 transition-all duration-300 ease-out group-hover:h-full group-hover:bottom-0"></span>
            <span className="relative items-center flex gap-2 justify-center">
              Resume
              <MdArrowOutward />
            </span>
          </Link>
          <div className="avatar-container row-start-1 md:row-auto md:col-start-2">
            <Avatar
              src={"/image/ceo3.jpg"}
              alt={"ceo"}
              width={345}
              height={345}
            />
          </div>
        </div>
      </Bounded>
      
      <TechList />

      <Bounded>
        <Heading as="h2" size="lg" className="mb-8 about-content">
          Education
        </Heading>
        
        <div className="space-y-8 px-4 sm:px-8 md:px-16 lg:px-28">
          <div className="education-item flex items-start gap-3 sm:gap-5">
            <div><FaCircle className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 mt-4"/></div>
            <div>
              <h4 className="font-bold leading-tight tracking-tight text-slate-300 text-2xl sm:text-3xl md:text-[36px]">
                Intermediate
              </h4>
              <h4 className="font-bold leading-tight tracking-tight text-[#abb5c2] text-lg sm:text-xl md:text-[24px]">
                2024 <span className="font-normal text-xl sm:text-2xl md:text-[27px]">/</span> GOVT
                Superior College
              </h4>
              <p className="mt-4 text-base sm:text-lg">I did so well.</p>
            </div>
          </div>

          <div className="education-item flex items-start gap-3 sm:gap-5">
            <div><FaCircle className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 mt-4"/></div>
            <div>
              <h4 className="font-bold leading-tight tracking-tight text-slate-300 text-2xl sm:text-3xl md:text-[36px]">
                Matriculation
              </h4>
              <h4 className="font-bold leading-tight tracking-tight text-[#abb5c2] text-lg sm:text-xl md:text-[24px]">
                2022 <span className="font-normal text-xl sm:text-2xl md:text-[27px]">/</span> Unique Primary School
              </h4>
              <p className="mt-4 text-base sm:text-lg">I did so well.</p>
            </div>
          </div>
        </div>
      </Bounded>
    </>
  );
};

export default Page;
