import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, OMDB_API_KEY, OMDB_BASE_URL } from "../utils/constants";
import { useEffect } from "react";



const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

  const getNowPlayingMovies = async (page = 1) => {
    try {
      
      const data = await fetch(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=movie&type=movie&page=${page}`,
         API_OPTIONS
        
      )
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      
      // console.log(data);
      
      const json = await data.json();
       console.log(json);

        dispatch(addNowPlayingMovies(json))
      if (page < 2) { // This will fetch 2 pages, totaling 50 results
        await getNowPlayingMovies(page + 1);
      }

    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    } 

  }
  useEffect(() => {
     getNowPlayingMovies();
   

  }, [])


}

export default useNowPlayingMovies;

