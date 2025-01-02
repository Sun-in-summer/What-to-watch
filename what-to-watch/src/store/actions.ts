import {createAction}  from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AppRoute, AuthorizationStatus } from '../const';
import { Review } from '../types/review';

export const setGenre = createAction<string>('main/setGenre');
export const setFilms = createAction<Film[]>('main/setFilms');
export const loadFilms = createAction<Film[]>('main/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setFilmsDataLoading = createAction<boolean>('data/setFilmsDataLoading');
export const setFilmsDataLoaded = createAction<boolean>('data/setFilmsDataLoaded');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const setSelectedFilmLoadedStatus = createAction<boolean>('data/setSelectedFilmLoadedStatus');
export const loadSelectedFilm = createAction<Film>('data/loadSelectedFilm');
export const setReviewsLoadedStatus = createAction<boolean>('data/setReviewsLoadedStatus');
export const loadReviews  = createAction<Review[]>('data/loadReviews');
export const setSimilarFilmsLoadedStatus  = createAction<boolean>('data/setSimilarFilmsLoadedStatus');
export const loadSimilarFilms = createAction<Film[]>('data/loadSimilarFilms');