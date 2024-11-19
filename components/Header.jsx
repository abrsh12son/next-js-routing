import React from 'react';

import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex justify-between items-center  top-0 border-b-4 border-stone-800 shadow-md shadow-green-950'>
        <div className='ml-7'>
                <h1 className='text-[2rem] font-extrabold first-letter:italic text-white first-letter:text-yellow-500 first-letter:text-[3rem] '>NEXT <br />
                    <span className='ml-3 text-[2.4rem]'>Js</span></h1>
        </div>
        <div className="flex gap-8 items-end justify-end text-white  p-2 mb-12 bg-black/40 mr-7 text-2xl">
                <Link className='hover:text-yellow-500 hover:first-letter:italic hover:first-letter:text-[1.2rem]'
                    href="/"> Home</Link>
                <Link className='hover:text-yellow-500 hover:first-letter:italic hover:first-letter:text-[1.2rem]'
                    href="/about"> About</Link>
                <Link className='hover:text-yellow-500 hover:first-letter:italic hover:first-letter:text-[1.2rem]'
                    href="/users"> Users</Link>
             

                <Link className='hover:text-yellow-500 hover:first-letter:italic hover:first-letter:text-[1.2rem]'
                    href="/rickmorty"> RickMorty</Link>

             

            {/* <Link href="/testimonial"> Testimonial</Link> */}

            </div>
            </div>
    );
}

export default Header;
