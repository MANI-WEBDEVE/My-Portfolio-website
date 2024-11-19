"use client";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function Avatar({
  src,
  alt,
  width,
  height,

}: ImageProps) {
  const component = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        { opacity: 0, scale: 1.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "elastic.inOut(1, 1)",
        }
      );

      window.onmousemove = (e: MouseEvent) => {
        if (!component.current) return 
        const componentReact = (
          component.current as HTMLDivElement
        ).getBoundingClientRect();
        const componentCenterX = componentReact.left + componentReact.width ;
        // const componentCenterY = componentReact.top + componentReact.height / 2;
        const componentPrecent = Math.min(
          Math.max(
            (e.clientX - componentCenterX) / (componentReact.width / 2),
            -1
          ),
          1
        );
        const distFromCenter = Math.min(
          Math.abs(e.clientX - componentCenterX) / (componentReact.width / 2),
          1
        );

        gsap
          .timeline({
            defaults: {
              duration: 0.3,
              overwrite: "auto",
              ease: "power3.inOut",
            },
          })
          .to(
            ".avatar",
            {
              rotation: gsap.utils.clamp(-3, 3, 8 * componentPrecent),
              duration: -0.1,
           
            },
            0
          )
        
          .to(".highlight", {
            opacity: distFromCenter - 0.6,
            x: (-10 + 20) & componentPrecent,
            duration: 0.3,
          }, 0);
      };
    } , component);
    return () => ctx.revert();
  }, []);

  return (
    // <div ref={component} className={clsx("relative h-full w-full", className)}>
    <div
      ref={component}
      className={clsx(
        "mt-10 flex justify-center items-start row-start-1  max-w-sm md:col-start-2 md:row-end-3 relative w-full h-full ref"
      )}
    >
      <div className="rounded-3xl border-2 border-slate-700 opacity-0 avatar overflow-hidden aspect-square ">
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          className={"avatar-image h-full w-full object-fill"}
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block transition-all duration-150"></div>
      </div>
    </div>
    // </div>
  );
}
