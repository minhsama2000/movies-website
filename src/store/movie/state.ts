import { createSlice } from "@reduxjs/toolkit";
import Movies from "../../models/movies";
import Movie from "../../models/movie";

const initialState: Movies[] = [];
const initMovie: Movie = {};

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesHot: initialState,
    isLoading: false,
    isDetailState: true,
    moviesDetail: initMovie,
    isPlayVideo: true,
    isShowModal: false,
    isDisableVideo: false,
    isDisableContent: false,
    isDisableCart: true,
  },
  reducers: {
    getMoviesSuccess: (state, action: { type: string; payload: Movies[] }) => {
      state.moviesHot = action.payload;
    },
    getMoviesFetch: (state) => {
      state.isLoading = true;
    },
    setMovieDetail: (state, action: { type: string; payload: Movie }) => {
      // console.log(action)
      state.moviesDetail = action.payload;
    },
    setIsPlayVideo: (state) => {
      state.isPlayVideo = !state.isPlayVideo;
    },
    showModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    setIsDisableContent: (
      state,
      action: { type: string; payload: boolean }
    ) => {
      state.isDisableContent = action.payload;
    },
    setIsDisableVideo: (state, action: { type: string; payload: boolean }) => {
      state.isDisableVideo = action.payload;
    },
    setIsDisableCart: (state, action: { type: string; payload: boolean }) => {
      state.isDisableCart = action.payload;
    },
  },
});

export const {
  getMoviesSuccess,
  getMoviesFetch,
  setMovieDetail,
  setIsPlayVideo,
  showModal,
  setIsDisableContent,
  setIsDisableVideo,
  setIsDisableCart,
} = movieSlice.actions;

export default movieSlice.reducer;
