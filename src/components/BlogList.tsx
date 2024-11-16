import React from 'react'
import blogData from "../json-data/blogData.json"


const BlogList = () => {
  return (
    <>
      <div className=''>
        <ul className='grid border-b border-slate-500'>
            {blogData.map((items, index) => (
                <li key={index} className='list-item opacity-0s '>
                    <a href={items.blogLink} target='_blank' className='flex flex-col justify-between border-t items-center border-t-slate-100 text-slate-200 md:flex-row py-10'>
                        <div className='flex flex-col'>
                            <span className='font-bold text-3xl'>{items.title}</span>
                            <div className='flex gap-3'>
                                {items.flag.map((flag, index) => (
                                    <span key={index} >{flag}</span>
                                ))}
                            </div>
                        </div>
                        <span>{items.readmore}</span>
                    </a>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default BlogList
