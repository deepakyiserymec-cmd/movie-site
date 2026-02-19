import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.imdbID}`} className="inline-block relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer p-2 transition-transform duration-300 hover:scale-110">
            <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                alt={movie.Title}
                className="w-full h-auto block rounded"
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white flex flex-col justify-center items-center transition-opacity duration-300 p-2 text-center">
                <p className="white-space-normal text-sm md:text-md font-bold">{movie.Title}</p>
                <p className="text-xs text-gray-300">({movie.Year})</p>
            </div>
        </Link>
    );
};

export default MovieCard;
