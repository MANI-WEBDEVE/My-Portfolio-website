"use client";
import React, { useEffect, useRef } from "react";
import { FaCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const ctx = gsap.context(() => {
      // Function to get animation distance based on screen size
      const getAnimationDistance = () => {
        const width = window.innerWidth;
        if (width < 480) return { min: 200, max: 300 };
        if (width < 768) return { min: 300, max: 400 };
        return { min: 400, max: 600 };
      };

      const updateAnimation = () => {
        const { min, max } = getAnimationDistance();
        
        gsap.timeline({
          scrollTrigger: {
            start: "top bottom",
            end: "bottom top",
            trigger: component.current,
            scrub: 6
          }
        }).fromTo(".text-row", {
          x: (index) => {
            return index % 2 === 0 
              ? gsap.utils.random(max, min) 
              : gsap.utils.random(-max, -min);
          },
          ease: "power2.inOut"
        }, 
        {
          x: (index) => {
            return index % 2 === 0 
              ? gsap.utils.random(-max, -min) 
              : gsap.utils.random(max, min);
          },
          ease: "power2.inOut"
        });
      };

      // Initial animation setup
      updateAnimation();

      // Update animation on resize
      window.addEventListener('resize', updateAnimation);
      return () => window.removeEventListener('resize', updateAnimation);
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="overflow-hidden">
      <Bounded as="div">
        <Heading as="h2" size="xl" className="mb-9">
          What I Use
        </Heading>
      </Bounded>
      {techListName.map((item, index) => (
        <div
          key={index}
          className="mb-8 text-row flex items-center justify-center gap-4 sm:gap-6 md:gap-8 text-slate-700"
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className="tech-name uppercase text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter flex gap-2 sm:gap-3 md:gap-5 items-center justify-center whitespace-nowrap"
                style={{
                  color: index === 7 && item.color ? item.color : "inherit",
                }}
              >
                <FaCircle className="w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5" />
                {item.name}
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
