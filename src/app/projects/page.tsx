import ProjectsList from "@/components/ProjectsList"
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import React from 'react'

const page = () => {
  return (
  <>
    <Bounded as="section">
        <Heading as='h2' size='xl'>Projects</Heading>
        <div className='prose prose-xl prose-invert mb-10 mt-10'>
            <p>Explore my diverse portfolio of web projects showcasing innovative solutions and creative designs.</p>
        </div>
      
        <ProjectsList />
    </Bounded>   
  </>
  )
}

export default page
