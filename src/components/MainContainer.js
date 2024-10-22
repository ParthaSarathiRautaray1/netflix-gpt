import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies || !movies.Search || movies.Search.length === 0) {
        return null; 
    }

   
   
     const mainMovie = movies.Search[0];

     console.log(mainMovie);

     const {Title , Year , Type} = mainMovie
    

  return (
    <div>
        <VideoTitle title={Title} releaseYear ={Year} type ={Type} />
        <VideoBackground />
      
    </div>
  )
}

export default MainContainer
