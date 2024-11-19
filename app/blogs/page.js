import Link from 'next/link'
import React from 'react'

export default function BlogPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
           <div className=''>
        <h1>new blogs page</h1>
        <div className='text-center flex justify-center items-center gap-5 '>
          <Link className='border-4 border-green-900 text-xl font-bold px-3 m-3'
            href='/blogs/post1'>Post 1</Link>
          <Link  className='border-4 border-green-900 text-xl font-bold px-3 m-3'
            href='/blogs/post2'>Post 2</Link>
      </div>
    </div>
   </div>
  )
}
