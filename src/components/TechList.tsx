"use client";
import React, { useEffect, useRef } from "react";
import { FaCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//------------------------------
// build Component
//------------------------------
import Heading from "./Heading";
import Bounded from "./Bounded";
gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
    const component = useRef<HTMLElement>(null);
  const techListName = [
    { name: "Next", color: "#fff" },
    { name: "React", color: "#61DAFB" },
    { name: "Three", color: "#000000" },
    { name: "GSAP", color: "#88CE02" },
  ];
  useEffect(() => {
    const ctx = gsap.context(()=> {
        gsap.timeline({
            scrollTrigger: {
               
                start: "top bottom",
                end: "bottom top",
                trigger: component.current,
                scrub: 6
            }
        }).fromTo(".text-row", {
            x: (index) => {
                return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
            },
            ease:"power2.inOut"
        }, 
        {
            x: (index) => {
                return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
            },
            ease:"power2.inOut"
        },
        
    )
    }, component);
    return () => ctx.revert();
  }, [])
  return (
    <>
      <section ref={component}>
        <Bounded as="div">
          <Heading as="h2" size="xl" className="mb-9">
            What I Ues
          </Heading>
        </Bounded>
        {techListName.map((item, index) => (
          <div
            key={index}
            className="mb-8 text-row flex items-center justify-center gap-8 text-slate-700 "
          >
            {Array.from({ length: 15 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className="tech-name uppercase text-8xl font-extrabold tracking-tighter flex gap-5 items-center justify-center "
                  style={{
                    color: index === 7 && item.color ? item.color : "inherit",
                  }}
                >
                  <FaCircle className="w-5 h-5 " />
                  {item.name}
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </section>
    </>
  );
};

export default TechList;
