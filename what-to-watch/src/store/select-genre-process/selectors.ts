import { NameSpace } from '../../const';
import { Genre } from '../../types/film';
import { State } from '../../types/state';

export const getSelectedGenre = (state: State): Genre => state[NameSpace.Genre]?.genre;