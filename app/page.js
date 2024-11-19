import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1 className="text-cyan-400 text-center"
      >           Welcome to next js
</h1>
        <Link href='/lifeQuotes'>
      <button className="text-blue-500 bg-stone-100 p-2 text-center rounded-lg ml-48 font-serif italic  
       transition ease-in-out delay-150 animate-pulse skew-y-12 hover:bg-blue-500 hover:text-white  hover:skew-y-0 hover:rotate-3	 ">
          Quotes
        
        </button>
        </Link>
    </div>
  
  );
}
