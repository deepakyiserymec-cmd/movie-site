import axios from 'axios';

const API_KEY = 'e610681a';
const BASE_URL = 'https://www.omdbapi.com/';

const api = axios.create({
    baseURL: BASE_URL,
});

export const fetchMovies = async (search) => {
    try {
        const response = await api.get(`?apikey=${API_KEY}&s=${search}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return { Error: error.message };
    }
};

export const fetchMovieDetails = async (id) => {
    try {
        const response = await api.get(`?apikey=${API_KEY}&i=${id}&plot=full`);
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return { Error: error.message };
    }
};

export default api;
