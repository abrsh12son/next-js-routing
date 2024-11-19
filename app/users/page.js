"use client"
import React, { useEffect, useState } from 'react';
export default function UsersPage() {
  const [loading,setLoading]=useState(true)
  const [users,setUser]=useState([])
  const [error,setError]=useState(null)
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Feching faild,check conection, API...");
        
        }
        const data = await response.json();
        setUser(data)
      }
      catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
      }
    
    }
    )();
  }, []);
  if (loading) {
    return <div className='text-white'>Loading....</div>
  }
  if (error) {
    return <div className='text-white'>Error :{ error.message}</div>
  }
  return (
    <div className="flex flex-col justify-center ml-96">
      <ul className=" w-fit p-10 flex flex-col justify-center gap-5">
        {
          users.map((user) =>{

            return (
              <li className=" bg-stone-300 text-black p-3 m-3 border-4 border-stone-600  flex flex-col gap-4 hover:bg-white hover:-skew-y-12 animate-pulse "
              key={user.id}>
            <h1 className="text-center text-3xl p-3">{user.name}</h1>
            <h3 className=" text-xl text-blue-700 ">{user.email}</h3>
            <p className=" text-xl text-yellow-700">Addres: {user.address.street}</p>

          </li>
         
         )
              
           } )
        }

      </ul>
      </div>
     
    
    );
  }
  