import React, { useEffect, useState } from 'react';
import Header from './Header';
import { fetchMovies } from '../utils/watchmodeMovie';

const placeholderImage = 'path_to_your_placeholder_image.jpg';
const MovieCard = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-48 m-2">
      {!imageLoaded && !imageError && (
        <div className="w-full h-72 bg-gray-300 animate-pulse"></div>
      )}
      <img 
        src={imageError ? placeholderImage : movie.imageUrl}
        alt={movie.title} 
        className={`w-full h-auto ${imageLoaded ? 'block' : 'hidden'}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
      />
      <h2 className="text-white text-sm mt-2">{movie.title}</h2>
    </div>
  );
};




const Browse = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
    };
    loadMovies();
  }, []);

  return (
    <div>
      <Header />
      <div className="pt-[10%] bg-black min-h-screen">
      <div className='text-center'>

        <h1 className="text-3xl text-blue-500 text- font-extralight font-[Poppins] mb-9 pb-2 border-b-2 border-red-500 inline-block">Movies</h1>
      </div>

      
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );

};

export default Browse;