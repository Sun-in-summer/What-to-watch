import {createAction}  from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const setGenre = createAction<string>('main/setGenre');
export const setFilms = createAction<Film[]>('main/setFilms');