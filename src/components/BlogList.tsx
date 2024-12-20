"use client"
import React, { useRef, useState, useEffect } from 'react'
import blogData from "../json-data/blogData.json"
import { MdArrowOutward } from 'react-icons/md'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const BlogList = () => {

  const component = useRef<HTMLDivElement>(null);
  const [hoverImageList, setHoverImageList] = useState<null | number>(null)
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const revealImage = useRef<HTMLDivElement>(null);
  const itemsRef = useRef< Array<HTMLLIElement> >([]);
  
  const currentImage = blogData.map((item) => {
    const image = item.hoverImage;
    return image;
  })

  useEffect(() => {
    currentImage.forEach((url) => {
        if (!url) return;
        const img = new Image();
        img.src = url;
    })
  }, [currentImage])

  // mouse enter the list item
  const handleMouseEnter = (index : number) => {
    setHoverImageList(index);
  }

  // mouse leave the list item
  const handleMouseLeave = () => {
    setHoverImageList(null);
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((items) => {
        gsap.fromTo(items, {
          opacity: 0, y: 25, duration:0.8
        }, {
          opacity: 1, 
          y: 0,
          duration: 1.2,
          delay: 0.7,
          ease: "elastic.out(1, 0.6)",
          
          scrollTrigger:{
            trigger: items,
            start: "top bottom-=100px",
            end: "bottom top",
            toggleActions: "play none none reverse",
            scrub: 3
          }
        })
      })
  });

    return () => ctx.revert();
  }, [])

  useEffect(() => {
    const handleMouseSpeed = (e: MouseEvent) => {
      const mousePosition = {
        x: e.clientX,
        y: e.clientY + window.scrollY, // Y-coordinate now considers scrolling
      };

      // Calculate speed based on the distance moved
      const speed = Math.sqrt(
        Math.pow(mousePosition.x - lastMousePosition.current.x, 2) 
        // Math.pow(mousePosition.y - lastMousePosition.current.y, 2) // Include Y-axis for speed
      );
 
      const ctxx = gsap.context(() => {
        if (currentImage !== null) {
          const maxX = window.innerWidth - 250; // Ensure image doesn't exceed right boundary
          const maxY = window.scrollY + window.innerHeight - 550; // Ensure image doesn't exceed bottom boundary

          // Smoothly move and rotate the image based on the mouse speed and position
          gsap.to(revealImage.current, {
         
            x: gsap.utils.clamp(0, maxX, mousePosition.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePosition.y - 450),
            rotation: speed * (mousePosition.x > lastMousePosition.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
          
            
          });
        }
        lastMousePosition.current = mousePosition; // Update last mouse position
      }, component);

      return () => ctxx.revert(); // Cleanup GSAP context on unmount
    };

    window.addEventListener("mousemove", handleMouseSpeed);
    return () => {
      window.removeEventListener("mousemove", handleMouseSpeed); // Cleanup on unmount
    };
  }, [currentImage, lastMousePosition]);


  return (
    <>
      <div className='relative' ref={component}>
        <ul className='grid border-b border-slate-500' onMouseLeave={() => handleMouseLeave()}>
            {blogData.map((items, index) => {
              
               return  <>

                <li key={index} className='list-item opacity-0 '
                onMouseEnter={() => handleMouseEnter(index)}
               ref={(el) => {itemsRef.current[index] = el as HTMLLIElement} }
                >
                    <a href={items.blogLink} target='_blank' className='flex flex-col justify-between border-t items-center border-t-slate-100 text-slate-200 md:flex-row py-10'>
                        <div className='flex flex-col'>
                            <span className='font-bold text-3xl'>{items.title}</span>
                            <div className='flex gap-3 text-yellow-400 text-lg font-bold'>
                                {items.flag.map((flag, index) => (
                                    <span key={index} >{flag}</span>
                                ))}
                            </div>
                        </div>
                        <span className="ml-auto flex items-center gap-3 font-medium text-xl ">{items.readmore}<MdArrowOutward/></span>
                    </a>
                </li>
                </>

})}
        </ul>
        {/* Hover Animation div */}
        <div className="hover-receal pointer-events-none absolute left-0 -top-[63px] -z-10 h-[280px] w-[210px] rounded-lg bg-cover bg-center transition-[background] duration-300 "
        style={{
          backgroundImage: hoverImageList !== null ? `url(${currentImage[hoverImageList]})` : ``,
        }}
        ref={revealImage}
        >
        
        </div>
      </div>
    </>
  )
}

export default BlogList


//add-the-project-data-and-blog-list-code-optimzef