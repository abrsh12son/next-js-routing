"use client"
import { useEffect, useState } from 'react';
  import Head from 'next/head';
import Link from 'next/link';


const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error("Fetching failed,Check API")
        }
        
        const data = await response.json();
        setCharacters(data.results);
      }
      catch (error) {
        setError(error)
        setCharacters([]); 
      }
      finally {
        setLoading(false)
      }

    })();

  }, []);
  if (loading)
    return <div className="text-3xl text-white">Loading...</div>
  if (error)
    return <div className="text-3xl text-white">Error:{error.message}</div>

  return (
    <>
      <Head>

        <title>Rick and Morty Characters</title>

        <meta name="description" content="List of characters from Rick and Morty." />
        <meta name="keywords" content="Rick and Morty, characters, TV show" />
      </Head>  
      <h1 className="text-center text-3xl  p-5 -mt-8 text-cyan-200 shadow-md shadow-blue-950 border-b-2 border-b-stone-800 rounded-lg">
          Rick & morty characters page </h1>

      <div className="text-stone-100 bg-gray-900 mt-3 ">

        <ul className="flex flex-col-3 gap-10 flex-wrap justify-center">

      {characters.map((character) => (
        <li className=" m-3  border-4  border-gray-300 rounded-xl text-cyan-400 shadow-md shadow-gray-300 hover:bg-cyan-950 hover:text-stone-50 hover:shadow-2xl hover:shadow-stone-950"
          key={character.id}>
        <Link href={`/rickmorty/${character.id}`}>

            <img src={character.image}
              
            alt={character.name}
            width={48}
            height={48}
            className="m-5 w-48 h-48 fill-current object-cover " />

          
          <h1 className=" text-xl  p-2 m-5 text-center w-48 text-wrap">
              {character.name}
            </h1>
            <h1 className=" text-xl  p-2 m-5 text-center w-48 text-wrap">
              {character.id}
            </h1>
            
            
     
          {/* <p className="text-md p-2 m-5">
            Location :{character.location.name}
          </p> */}
            
            </Link>
        </li>
      ))}
          
        </ul>
        </div>
      </>
  );
};


export default CharactersPage;