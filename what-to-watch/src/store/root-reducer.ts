import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmData } from './films-data/film-data';
import { userProcess } from './user-process/user-process';
import { selectGenreProcess } from './select-genre-process/select-genre-process';



export const rootReducer = combineReducers({
  [NameSpace.Data]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Genre]:selectGenreProcess.reducer
});