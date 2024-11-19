"use client"
import React, { useRef, useState, useEffect } from 'react'
import projectData from "../json-data/projectsData.json"
import { MdArrowOutward } from 'react-icons/md'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  hoverImage: string;
  projectLink: string;
  title: string;
  flag: string[];
  viewProject: string;
}

const ProjectsList = () => {

  const component = useRef<HTMLDivElement>(null);
  const [hoverImageList, setHoverImageList] = useState<null | number>(null);
  const lastMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const revealImage = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<HTMLLIElement>>([]);
  
  const currentImage = projectData.map((item: ProjectItem) => item.hoverImage);

  useEffect(() => {
    currentImage.forEach((url) => {
      if (!url) return;
      const img = new Image();
      img.src = url;
    });
  }, [currentImage]);

  const handleMouseEnter = (index: number): void => {
    setHoverImageList(index);
  };

  const handleMouseLeave = (): void => {
    setHoverImageList(null);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (!item) return;
        gsap.fromTo(item, 
          {
            opacity: 0,
            y: 25,
            duration: 0.8
          }, 
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.7,
            ease: "elastic.out(1, 0.6)",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom top",
              toggleActions: "play none none reverse",
              scrub: 3
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseSpeed = (e: MouseEvent) => {
      const mousePosition = {
        x: e.clientX,
        y: e.clientY + window.scrollY
      };

      const speed = Math.sqrt(
        Math.pow(mousePosition.x - lastMousePosition.current.x, 2)
      );

      const ctxx = gsap.context(() => {
        if (currentImage !== null && revealImage.current) {
          const maxX = window.innerWidth - 250;
          const maxY = window.scrollY + window.innerHeight - 550;

          gsap.to(revealImage.current, {
            x: gsap.utils.clamp(0, maxX, mousePosition.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePosition.y - 450),
            rotation: speed * (mousePosition.x > lastMousePosition.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3
          });
        }
        lastMousePosition.current = mousePosition;
      }, component);

      return () => {
        ctxx.revert();
      };
    };

    window.addEventListener("mousemove", handleMouseSpeed);
    return () => {
      window.removeEventListener("mousemove", handleMouseSpeed);
    };
  }, [currentImage]);

  return (
    <>
      <div className="relative" ref={component}>
        <ul className="grid border-b border-slate-500" onMouseLeave={handleMouseLeave}>
          {projectData.map((item: ProjectItem, index: number) => (
            <li
              key={index}
              className="list-item opacity-0"
              onMouseEnter={() => handleMouseEnter(index)}
              ref={(el) => {itemsRef.current[index] = el as HTMLLIElement}}
            >
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between border-t items-center border-t-slate-100 text-slate-200 md:flex-row py-10"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-3xl">{item.title}</span>
                  <div className="flex gap-3 text-yellow-400 text-lg font-bold">
                    {item.flag.map((flag, flagIndex) => (
                      <span key={flagIndex}>{flag}</span>
                    ))}
                  </div>
                </div>
                <span className="ml-auto flex items-center gap-3 font-medium text-xl">
                  {item.viewProject}
                  <MdArrowOutward />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hover-receal pointer-events-none absolute left-0 -top-[63px] -z-10 h-[280px] w-[210px] rounded-lg bg-cover bg-center transition-[background] duration-300"
          style={{
            backgroundImage: hoverImageList !== null ? `url(${currentImage[hoverImageList]})` : ''
          }}
          ref={revealImage}
        />
      </div>
    </>
  );
};

export default ProjectsList
