import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchDataMovies = createAsyncThunk(
  "movies/fetchDataMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchDataShows = createAsyncThunk(
  "movies/fetchDataShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchDataMoviesDetails = createAsyncThunk(
  "movies/fetchDataMoviesDetails",
  async (id) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows:{},
  dataDetails:{}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovies:(state) => {
      state.removeSelectedMovies = {}
    }
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
    [fetchDataMoviesDetails.fulfilled]: (state,{payload}) => {
      return {...state, dataDetails: payload };
    },
  },
});

export const { removeSelectedMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export const getDetails = (state) => state.dataDetails;
export const getAllShows = (state) => state.shows;

export default movieSlice.reducer;
