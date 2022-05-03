import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchDataMovies = createAsyncThunk(
  "movies/fetchDataMovies",
  async () => {
    const movieText = "Focus";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchDataShows = createAsyncThunk(
  "movies/fetchDataShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=movie`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows:{}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchDataMovies.pending]: () => {
      console.log("Pending...");
    },
    [fetchDataMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully !", payload);
      return { ...state, movies: payload };
    },
    [fetchDataMovies.rejected]: () => {
      console.log("Rejeted");
    },
    [fetchDataShows.fulfilled]: (state,{payload}) => {
      return {...state, shows: payload };
    },
    
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export const getAllShows = (state) => state.shows;
export default movieSlice.reducer;
