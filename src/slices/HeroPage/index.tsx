"use client"
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap, { random } from "gsap";
import {useEffect , useRef} from "react";


/**
 * Props for `HeroPage`.
 */
export type HeroPageProps = SliceComponentProps<Content.HeroPageSlice>;

/**
 * Component for "HeroPage" Slices.
 */
const HeroPage = ({ slice }: HeroPageProps): JSX.Element => {
  const component = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(( ) => {
      const tl = gsap.timeline();
      tl.fromTo(".name-animation", {
        x:-100,
        opacity:0,
        rotate: -10,
      },
      {
        x:0,
        opacity:1,
        rotate: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "left top",
        stagger: {
          each:0.1,
          from: "random"
        }
      }
    )
    }, component)
    return () => ctx.revert()
  }, [])



  const renderLetter = ( name:KeyTextField , key:string ) => {
    if (!name) return ;
    return (
      name.split("").map((letter, index) => (
        <span key={index} className={`name-animation name-animation-${key} opacity- inline-block`}>{letter}</span>
      ))
    )
  }


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,15vmin,15rem)] font-extrabold leading-none tracking-tighter "
            aria-label={slice.primary.name + " " + slice.primary.lastname}
          >
            <span className="block text-slate-300">{renderLetter(slice.primary.name, "first")}</span>
            <span className="block text-slate-500 -mt-[.2em]">{renderLetter(slice.primary.lastname, "lastName")}</span>
          </h1>
            <span className="block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-transparent text-2xl font-bold uppercase tracking-[.2em] opacity-100 md:text-4xl">{slice.primary.tagline}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
