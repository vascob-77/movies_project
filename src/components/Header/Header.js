import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDataMovies, fetchDataShows } from "../../features/movies/movieSlice";
import "./Header.scss";
//Images
import userAvatar from "../../images/user.png";
import logo from "../../common/logo.png"


function Header() {

  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(term.trim() === '') return alert('Please enter search term !');
    dispatch(fetchDataMovies(term));
    dispatch(fetchDataShows(term));
    setTerm();
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/"><img src={logo} width={150} alt="Logo" /></Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search Movies or Shows" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={userAvatar} alt="user" />
      </div>
    </div>
  );
}

export default Header;
