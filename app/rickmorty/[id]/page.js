"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CharacterDetail({ params }) {
  const { id } = params; // Extract ID from params
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`
          );
          if (!response.ok) {
            throw new Error("Character not found");
          }
          const data = await response.json();
          setCharacter(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [id]);

  if (loading) return <div className=" text-stone-50">Loading...</div>;
  if (error) return <div className="bg-white text-black">Error: {error.message}</div>;

  return (
    <div className="flex  justify-center items-center">
      <div className="bg-white text-black p-1 flex flex-col items-center gap-5  border-4 border-stone-300">
        <div className="flex">
          <img
            src={character.image}
            alt={character.name}
            className=" w-80 h-64 object-cover"
          />
          <p className=" text-yellow-400 text-md -ml-20 bg-green-950  h-fit mt-3 px-3 rounded-md">
            {character.status}
          </p>
        </div>
        <h1 className=" text-blue-600 text-2xl">{character.name}</h1>
        <h1 className=" text-stone-950 text-2xl">{character.gender}</h1>
        <p className=" text-red-600 text-xl">
          <span className="text-red-950 block text-center">Located On:</span>
          {character.location.name}
        </p>
        <p className=" text-red-600 text-md">
          <span className="text-red-900">Species</span>:{character.species}
        </p>
      </div>
      <div className="-mt-48">
        <Link href="/rickmorty">
          <button
            className="text-blue-500 bg-stone-100 p-5 text-center rounded-lg ml-48 font-serif italic  
       transition ease-in-out delay-150 animate-pulse skew-y-12 hover:bg-blue-500 hover:text-white  hover:skew-y-0 hover:rotate-3	 "
          >
            RickMorty
          </button>
        </Link>
      </div>
    </div>
  );
}
