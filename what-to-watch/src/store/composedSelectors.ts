import { createSelector } from '@reduxjs/toolkit';
import { getFilmsData } from './films-data/selectors';
import { getSelectedGenre } from './select-genre-process/selectors';
import { Genres } from '../const';


export const selectFilteredFilms = createSelector(
  [getFilmsData, getSelectedGenre],
  (films, genre) => {
    if (genre === Genres.All) {
      return films;
    }
    return films.filter(film => film.genre === genre);
  }
);