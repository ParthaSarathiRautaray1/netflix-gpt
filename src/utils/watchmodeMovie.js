import axios from 'axios';

const API_KEY = 'paIX6kh6nhTFeOUwO2xvqn2wgBeJUYkOTIFq2VgY';
const BASE_URL = 'https://api.watchmode.com/v1';


const getImageUrl = (imdbId) => {
    return `https://img.omdbapi.com/?i=${imdbId}&apikey=6eb8b2e5`;
  };

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/list-titles/`, {
        params: {
            apiKey: API_KEY,
            types: 'movie',
            limit: 100
          }
    });

    const moviesWithImages = response.data.titles.map(movie => ({
        ...movie,
        imageUrl: getImageUrl(movie.imdb_id)
      }));


      console.log(moviesWithImages);
      return moviesWithImages;
    
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};