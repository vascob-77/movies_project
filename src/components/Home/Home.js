import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchDataMovies } from "../../features/movies/movieSlice";
import { fetchDataShows } from "../../features/movies/movieSlice";

function Home() {
  
  const dispatch = useDispatch();
  const movies = "Moto";
  const shows = 'Crypto'
  useEffect(() => {
    dispatch(fetchDataMovies(movies))
    dispatch(fetchDataShows(shows))
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
}

export default Home;
