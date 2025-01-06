import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { Film, Genre } from '../../types/film';
import { Review } from '../../types/review';
import {
  fetchFavoriteFilmsAction,
  fetchFilmsAction,
  fetchReviewsAction,
  fetchSelectedFilmAction,
  fetchSimilarFilmsAction,
} from '../api-actions';

type FilmData = {
  genre: Genre;
  films: Film[];
  error: string | null;
  isFilmsDataLoading: boolean;
  isFilmsDataLoaded: boolean;
  favoriteFilmsCount: number;
  userAvatar: string | undefined;
  isSelectedFilmLoaded: boolean;
  isSelectedFilmLoading: boolean;
  selectedFilm: undefined | Film;
  isReviewsLoaded: boolean;
  isSimilarFilmsLoaded: boolean;
  reviews: Review[];
  similarFilms: Film[];
  isErrorLoading: boolean;
  isReviewSent: boolean;
  isFavoriteFilmsLoading: boolean;
  favoriteFilms: Film[]
};

const initialState: FilmData = {
  genre: DEFAULT_GENRE as Genre,
  films: [],
  error: null,
  isFilmsDataLoading: false,
  isFilmsDataLoaded: false,
  favoriteFilmsCount: 0,
  userAvatar: undefined,
  isSelectedFilmLoaded: false,
  selectedFilm: undefined,
  isReviewsLoaded: false,
  isSimilarFilmsLoaded: false,
  similarFilms: [],
  reviews: [],
  isErrorLoading: false,
  isReviewSent: false,
  isSelectedFilmLoading: false,
  isFavoriteFilmsLoading: false,
  favoriteFilms: []
};
export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoaded = false;
      })
      .addCase(fetchSelectedFilmAction.fulfilled, (state, action) => {
        state.selectedFilm = action.payload;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoaded = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoaded = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsLoaded = false;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
        .addCase(fetchFavoriteFilmsAction.pending, (state)=> {
        state.isFavoriteFilmsLoading = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action)=> {
        state.favoriteFilms = action.payload;
        state.isFavoriteFilmsLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state, )=> {
        state.isFavoriteFilmsLoading = false;
      })


  },
});
