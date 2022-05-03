import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchDataMovies } from "../../features/movies/movieSlice";
import { fetchDataShows } from "../../features/movies/movieSlice";

function Home() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataMovies())
    dispatch(fetchDataShows())
  }, [dispatch]);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
}

export default Home;
