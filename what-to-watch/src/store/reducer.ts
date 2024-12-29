import {createReducer}  from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import { DEFAULT_GENRE } from '../const';
import { setFilms, setGenre } from './actions';
import { Film, Genre } from '../types/film';

type InitialState = {
    genre: Genre;
    films: Film[];
}

const initialState: InitialState ={
 genre: DEFAULT_GENRE as Genre,
 films: films,
}


const reducer = createReducer(initialState, (builder)=>{
    builder
     .addCase(setGenre, (state, action)=>{
        state.genre = action.payload as Genre;
       
     })
     .addCase(setFilms, (state, action) =>{
        state.films = action.payload;
     })
});

export {reducer};