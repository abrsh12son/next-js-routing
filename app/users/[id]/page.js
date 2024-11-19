'use client'
import { useRouter } from 'next/navigation';
import React from 'react'


const DaynamicUser = () => {

    const router = useRouter();
  

  return (
    <div className='text-blue-600 bg-stone-300 p-3 m-3'>
      <h1>This is daynamic user page</h1>
          <p className='p-2 m-3' >id</p>
    </div>
  )
}

export default DaynamicUser;

