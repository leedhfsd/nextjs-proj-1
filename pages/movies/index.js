import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  
  useEffect(()=> {
    (async ()=> {
      const {results} = await (await (fetch("/api/movies")) ).json()
      setMovies(results);
    })();
  },[]);
  console.log(movies);
  return (
    <div className="bg-black h-screen">
      <main className="mx-48">
        <article className="">
          <form className="relative" action="/search" method="get" acceptCharset="uft-8">
            <label className="absolute w-full">
              <input dir="auto" id="inner_search" name="query" type="text" tabIndex={"1"} autoCorrect="off"
              autoComplete="off" spellCheck="false" placeholder="영화, TV 프로그램, 인물 검색..."
              className="py-2.5 rounded-full w-full"/>
            </label>
            <input type="submit" value="Search" className="absolute right-0 text-white rounded-full bg-teal-700 font-bold text-md py-2.5 px-6"/>
          </form>
        </article>
        <article>
          <h1 className="text-white text-2xl mx-8 pt-16">What's Popular</h1>
          <div className="flex scrollbar overflow-x-scroll overflow-y-hidden mt-8">
            {movies?.map((movie)=> (
            <div className="mx-4" key={movie.id}>
              <Link href={`/movies/${movie.original_title}/${movie.id}`} className="">
                <a>
                  <img className="mt-4 rounded-2xl hover:scale-105 hover:ease-in-out hover:rounded-2xl duration-200" 
                  alt ="" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </a>
              </Link>  
              <h1 className="flex justify-center text-white w-72 text-md mt-6">
                <Link href={`/movies/${movie.original_title}/${movie.id}`} className="">
                  <a>{movie.original_title}</a>
                </Link>  
              </h1>              
            </div>))}
          </div>
        </article>
      </main>
    </div>
  );
}
