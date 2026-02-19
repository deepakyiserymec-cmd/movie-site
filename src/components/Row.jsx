import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from './MovieCard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ title, searchTerm, rowID }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies(searchTerm).then(data => {
            if (data.Search) {
                setMovies(data.Search);
            }
        });
    }, [searchTerm]);

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className='my-8'>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
                <div
                    id={'slider' + rowID}
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar relative'
                >
                    {movies.map((movie, id) => (
                        <MovieCard key={id} movie={movie} />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
        </div>
    );
};

export default Row;
