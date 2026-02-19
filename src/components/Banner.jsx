import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';

const Banner = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Fetch a random distinct header movie, e.g., Batman
        fetchMovies('Avengers').then(data => {
            if (data.Search) {
                const randomMovie = data.Search[Math.floor(Math.random() * data.Search.length)];
                setMovie(randomMovie);
            }
        });
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    if (!movie) return <div className='w-full h-[550px] bg-gray-900 animate-pulse'></div>;

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover'
                    src={movie.Poster !== 'N/A' ? movie.Poster : ''}
                    alt={movie.Title}
                />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie.Title}</h1>
                    <div className='my-4'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>Released: {movie.Year}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                        {/* OMDB Search endpoint doesn't give plot, so generic text or fetch details */}
                        Coming soon to Netflix...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
