"use client"
import React, { useRef, useState } from 'react'
import blogData from "../json-data/blogData.json"
import { MdArrowOutward } from 'react-icons/md'


const BlogList = () => {

  const component = useRef<HTMLDivElement>(null);
  const [hoverImageList, setHoverImageList] = useState<null | number>(null)


  
  const currentImage = blogData.map((item) => {
    const image = item.hoverImage;
    return image;
  })

  // mouse enter the list item
  const handleMouseEnter = (index : number) => {
    console.log(index)
    setHoverImageList(index);
  }

  return (
    <>
      <div className='' ref={component}>
        <ul className='grid border-b border-slate-500'>
            {blogData.map((items, index) => {
              
               return  <>
                <li key={index} className='list-item opacity-0s '
                onMouseEnter={() => handleMouseEnter(index)}
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
        <div className="hover-receal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center transition-[background] duration-300"
        style={{
          backgroundImage: hoverImageList !== null ? `url(${currentImage[hoverImageList]})` : ``,
        }}
        >
        
        </div>
      </div>
    </>
  )
}

export default BlogList
