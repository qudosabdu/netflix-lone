import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Requests";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length - 1)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

//   console.log(movie);

const truncateString = (str, num)=> {
    if (str?.length > num){
        return str.slice(0, num) + '...'
    }
    else{
        return str
    }
}

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[550px] absolute top-0 left-0 bg-gradient-to-r from-black "></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title || movie?.name || movie?.original_name}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
          <div>
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-whiite border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date || movie?.first_air_date} •{" "}
            {movie?.vote_average}
          </p>
            <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
                {
                    truncateString(movie?.overview, 150)
                }
            </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
