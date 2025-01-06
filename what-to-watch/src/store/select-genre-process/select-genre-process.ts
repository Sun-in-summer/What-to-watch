import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_GENRE, NameSpace } from '../../const';
import { Genre } from '../../types/film';


export type SelectGenreProcess = {
  genre: Genre;
};

const initialState: SelectGenreProcess = {
  genre: DEFAULT_GENRE as Genre,
};

export const selectGenreProcess = createSlice({
  name: NameSpace.Genre,
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre= action.payload;
    },
  },
});

export const {setGenre} = selectGenreProcess.actions;
