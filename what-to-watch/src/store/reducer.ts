import {createReducer}  from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import { DEFAULT_GENRE } from '../const';
import { setFilms, setGenre } from './actions';
import { Film } from '../types/film';

type InitialState = {
    genre: string;
    films: Film[];
}

const initialState: InitialState ={
 genre: DEFAULT_GENRE,
 films: films,
}


const reducer = createReducer(initialState, (builder)=>{
    builder
     .addCase(setGenre, (state, action)=>{
        state.genre = action.payload;
     })
     .addCase(setFilms, (state, action) =>{
        state.films = action.payload;
     })
});

export {reducer};