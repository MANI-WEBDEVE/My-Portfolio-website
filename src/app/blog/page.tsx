
import BlogList from '@/components/BlogList'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return (
  <>
    <Bounded as="section">
        <Heading as='h2' size='xl'>Blog</Heading>
        <div className='prose prose-xl prose-invert mb-10 mt-10'>
        
            <p>Explore my latest insights and experiences shared through my Medium blog posts.</p>
        </div>
        <BlogList />
    </Bounded>   
  </>
  )
}

export default page

 export const metadata: Metadata = {
  title: "M-Inam Blogs✒",
  description: "Explore insightful articles on web development, technology trends, and creative solutions. Our blog offers expert perspectives, practical tips, and in-depth analyses to keep you informed and inspired in the ever-evolving digital landscape.",
  
};