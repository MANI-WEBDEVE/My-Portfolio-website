import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import React from 'react'

const page = () => {
  return (
  <>
    <Bounded as="section">
        <Heading as='h2' size='xl'>Blog</Heading>
        <div className='prose prose-xl prose-invert mb-10 mt-10'>
            <p>I write about what I've learned so others can benefit.</p>
        </div>
    </Bounded>
  </>
  )
}

export default page