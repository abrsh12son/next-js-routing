import Link from 'next/link'

import React from 'react'

export const metadata = {
  title: "about us",

}
export default function AboutPage() {
  
  return (
    <>
            <h1 className ="text-center text-4xl text-white p-3 m-1 font-black" 
            
       >About page</h1>

      <div className="bg-cyan-600 text-white h-svh">

        <div className='flex justify-between '>
          
        <div className="text-red-700  p-1 bg-white rounded-xl m-5"
        >About Logo</div>
          

      </div>
        <h1 className='text-center p-3'>this is about page</h1>
        
      <button className="bg-black text-white rounded-md ml-10 p-3 shadow-lg shadow-stone-700">
      
          <Link href="/"> Go to home page </Link>
          
          
        </button>
        
      </div>
      </>
  )
}
