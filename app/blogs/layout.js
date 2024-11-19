import React from 'react'
export const metadata = {
    title: "Blogs",
    description:"this is a blogs  page to render dynamic blog posts"
    
}

export default function Bloglayout({ children }) {
    
  return (
      <div className='flex flex-col justify-center items-center bg-green-950 text-white  mt-5'>
          <p>{ children }</p>
      
    </div>
  )
}
