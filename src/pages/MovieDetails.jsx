import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import Navbar from '../components/Navbar';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMovieDetails(id).then(data => {
            setMovie(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div className='w-full h-screen text-white text-center pt-20'>Loading...</div>;

    if (!movie || movie.Error) return <div className='w-full h-screen text-white text-center pt-20'>Movie not found</div>;

    return (
        <>
            <Navbar />
            <div className='w-full h-screen text-white bg-black'>
                <div className='w-full h-[70vh] relative'>
                    <div className="absolute w-full h-full bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <img
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/1280x720'}
                        alt={movie.Title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className='absolute bottom-[5%] p-4 md:p-8 w-full md:w-[70%]'>
                        <h1 className='text-3xl md:text-6xl font-bold'>{movie.Title}</h1>
                        <div className='my-4 flex items-center space-x-4 text-gray-300 text-sm'>
                            <span className='border border-gray-500 px-2 py-1 text-xs'>{movie.Rated}</span>
                            <span>{movie.Year}</span>
                            <span>{movie.Runtime}</span>
                        </div>
                        <div className='my-4 flex flex-wrap gap-2'>
                            {movie.Genre?.split(',').map((g, i) => (
                                <span key={i} className='bg-red-600 px-3 py-1 rounded text-sm font-semibold'>{g.trim()}</span>
                            ))}
                        </div>
                        <p className='text-gray-200 text-lg md:text-xl my-4'>{movie.Plot}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <p className='text-gray-400'><span className='font-bold text-white'>Director:</span> {movie.Director}</p>
                            <p className='text-gray-400'><span className='font-bold text-white'>Cast:</span> {movie.Actors}</p>
                            <p className='text-gray-400'><span className='font-bold text-white'>IMDb Rating:</span> {movie.imdbRating}</p>
                            <p className='text-gray-400'><span className='font-bold text-white'>Awards:</span> {movie.Awards}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;
