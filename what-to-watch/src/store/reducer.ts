import {createReducer}  from '@reduxjs/toolkit';
import {  AuthorizationStatus, DEFAULT_GENRE } from '../const';
import { loadFilms, loadReviews, loadSelectedFilm, loadSimilarFilms, requireAuthorization, setFilms, setFilmsDataLoaded, setFilmsDataLoading, setGenre, setReviewsLoadedStatus, setSelectedFilmLoadedStatus, setSimilarFilmsLoadedStatus } from './actions';
import { Film, Genre } from '../types/film';
import { Review } from '../types/review';

type InitialState = {
    genre: Genre;
    films: Film[];

    authorizationStatus: AuthorizationStatus;
    error: string | null;
    isFilmsDataLoading: boolean;
    isFilmsDataLoaded: boolean;

    favoriteFilmsCount: number;
    userAvatar: string | undefined;
    isSelectedFilmLoaded: boolean;
    selectedFilm: undefined | Film;
    isReviewsLoaded: boolean;
    isSimilarFilmsLoaded: boolean;
    reviews: Review[];
    similarFilms: Film[];
    
  
}

const initialState: InitialState ={
 genre: DEFAULT_GENRE as Genre,
 films: [],
 authorizationStatus: AuthorizationStatus.Unknown,
 error:  null,
 isFilmsDataLoading: false,
 isFilmsDataLoaded: false,

 favoriteFilmsCount: 0,
 userAvatar: undefined,
 isSelectedFilmLoaded: false,
selectedFilm: undefined ,
isReviewsLoaded: false,
    isSimilarFilmsLoaded: false,
    similarFilms: [],
    reviews: []
    
}


const reducer = createReducer(initialState, (builder)=>{
    builder
     .addCase(setGenre, (state, action)=>{
        state.genre = action.payload as Genre;
       
     })
     .addCase(setFilms, (state, action) =>{
        state.films = action.payload;
     })
     .addCase(loadFilms, (state, action)=>
      {state.films = action.payload}     )
     .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFilmsDataLoaded, (state, action)=> {
      state.isFilmsDataLoaded = action.payload;
    })
    .addCase(setFilmsDataLoading, (state, action)=> {
      state.isFilmsDataLoading = action.payload;
    })
  .addCase(setSelectedFilmLoadedStatus, (state, action) => {
      state.isSelectedFilmLoaded = action.payload;
    })
    .addCase(setReviewsLoadedStatus, (state, action) => {
      state.isReviewsLoaded = action.payload;
    })
    .addCase(setSimilarFilmsLoadedStatus, (state, action) =>{
      state.isSimilarFilmsLoaded = action.payload;
    })
  .addCase(loadSelectedFilm, (state, action) =>{
       state.selectedFilm = action.payload;
   })
    .addCase(loadReviews, (state, action) => {
      console.log(action.payload);
      state.reviews = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action)=>{
      state.similarFilms = action.payload;
    })}
  
  

);

export {reducer};