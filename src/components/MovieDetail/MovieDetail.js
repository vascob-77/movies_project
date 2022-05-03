import React from 'react'
import './MovieDetail.scss';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { fetchDataMoviesDetails, getDetails, removeSelectedMovies } from '../../features/movies/movieSlice';

function MovieDetail() {

  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails)

  console.log(data);
  useEffect(() => {
    dispatch(fetchDataMoviesDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovies());
    }
  },[dispatch,imdbID])


  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? 
        (<div>...Loading</div>)
        :
   ( <>
      <div className="section-title">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
        <span>
          IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
        </span>
        <span>
          IMDB Votes <i className="fa fa-star"></i> : {data.imdVotes}
        </span>
        <span>
          Runtime <i className="fa fa-star"></i> : {data.Runtime}
        </span>
        <span>
          Year <i className="fa fa-star"></i> : {data.Year}
        </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Language</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
      </>) }
    </div>
  )
}

export default MovieDetail