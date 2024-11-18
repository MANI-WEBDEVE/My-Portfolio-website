"use client";
import { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes";

export type HeroPageProps = SliceComponentProps<Content.HeroPageSlice>;

const HeroPage = ({ slice }: HeroPageProps): JSX.Element => {
  const component = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for window to ensure this code runs only on the client
    if (typeof window !== undefined) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          ".name-animation",
          {
            x: -100,
            opacity: 0,
            rotate: -10,
          },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: "elastic.out(2, 0.6)",
            transformOrigin: "right top",
            stagger: {
              each: 0.1,
              from: "random",
            },
          }
        );
        tl.fromTo(
          ".tag-name",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "elastic.out(2, 0.2)",
          }
        );
      }, component);
      return () => ctx.revert(); // Cleanup on unmount
    }
  }, []);

  const renderLetter = (name: KeyTextField, key: string) => {
    if (!name) return null;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} opacity- inline-block`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <Shapes />
        <div className="col-start-1 md:row-start-1 flex items-center justify-center flex-col">
          <h1
            className="mb-8 text-[clamp(3rem,14vmin,22rem)] font-extrabold leading-none tracking-tighter "
            aria-label={`${slice.primary.name} ${slice.primary.lastname}`}
          >
            <span className="block text-slate-300 ">
              {renderLetter(slice.primary.name, "first")}
            </span>
            <span className="block text-slate-500 -mt-[.2em]">
              {renderLetter(slice.primary.lastname, "lastName")}
            </span>
          </h1>
          <span className="block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent text-2xl font-bold uppercase tracking-[.2em] opacity-100 md:text-4xl tag-name">
            {slice.primary.tagline}
          </span>
        </div>
      </div>
    </Bounded>
  );
};

export default HeroPage;
