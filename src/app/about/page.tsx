import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import TechList from "@/components/TechList";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Bounded>
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading as="h1" size="xl" className="col-start-1">
            About Inam
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert col-start-1 mt-4">
            <p>
              As a dedicated full-stack developer with a strong foundation in
              both front-end and back-end technologies, I specialize in building
              high-quality, scalable web applications. I’m proficient in tools
              and frameworks like Next.js, React.js, Node.js, and Express
            </p>

            <p>
              My passion for coding and problem-solving drives me to create
              seamless user experiences and efficient server-side functionality.
             
            </p>

            <p>
              I'm eager to tackle challenging problems and am always on the
              lookout for new tools and best practices to enhance my development
              process.
            </p>
          </div>
          <Link
            href="#"
            className="w-fit relative inline-block px-5 py-2 font-semibold text-gray-900 border border-gray-900 rounded-md bg-white overflow-hidden group hover:text-black transform transition-transform duration-300 ease-out mt-4 hover:scale-105"
          >
            <span className="absolute bottom-0 inset-0 w-full h-1 bg-yellow-500 transition-all duration-300 ease-out group-hover:h-full group-hover:bottom-0"></span>
            <span className="relative items-center flex gap-2 justify-center">
              Resume
              <MoveUpRight className="w-4 h-4" />
            </span>
          </Link>
            <Avatar src={"/image/ceo3.jpg"} alt={"ceo"} width={345} height={345} />
        </div>
      </Bounded>
        <TechList/>

      <Bounded>
        <Heading as="h2" size="lg">
            Education
        </Heading>
        </Bounded>
        <div className=" px-28">
          <h4 className="font-bold leading-tight tracking-tight  text-slate-300 text-[36px]">
            Intermidiate
          </h4>
          <h4 className="font-bold leading-tight tracking-tight  text-[#CBD5E1] text-[24px]">
              2022 <span className="font-normal text-[27px]">/</span> GOVT Superior Collage
          </h4>

        </div>


    </>
  );
};

export default page;