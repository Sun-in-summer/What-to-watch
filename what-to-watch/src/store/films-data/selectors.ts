import { NameSpace } from '../../const';
import { Film } from '../../types/film';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getFilmsData = (state: State): Film[] => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;
export const getFavoriteFilmsCount = (state: State): number => state[NameSpace.Data].favoriteFilmsCount;
export const getFavoriteFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFavoriteFilmsLoading;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Data].favoriteFilms;

export const getErrorInfo = (state: State) : string | null => state[NameSpace.Data].error;

// export const getFavoriteOffersData = (state: State): Offers => state[NameSpace.Data].favoriteOffers;
// export const getFavoriteOffersLoadingStatus = (state: State) :boolean => state[NameSpace.Data].isFavoriteOffersLoading;

export const getReviewsData = (state: State): Review[] => state[NameSpace.Data].reviews;
export const getReviewsLoadingStatus = (state: State) : boolean => state[NameSpace.Data].isReviewsLoaded;
export const getSimilarFilmsData = (state: State): Film[] => state[NameSpace.Data].similarFilms;
export const getSimilarFilmsLoadedStatus = (state: State) : boolean => state[NameSpace.Data].isSimilarFilmsLoaded;

export const getSelectedFilmData = (state: State): Film | undefined => state[NameSpace.Data].selectedFilm
export const getSelectedFilmLoadingStatus = (state: State): boolean => state[NameSpace.Data].isSelectedFilmLoading;
export const getErrorLoadingStatus = (state: State): boolean => state[NameSpace.Data].isErrorLoading;

// export const getActiveCardId = (state: State): number | undefined=> state[NameSpace.Data].activeCardId;
export const getReviewSendingStatus = (state: State) : boolean => state[NameSpace.Data].isReviewSent;