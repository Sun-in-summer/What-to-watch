import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../types/film';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { loadFilms, loadReviews, loadSelectedFilm, loadSimilarFilms, redirectToRoute, requireAuthorization, setFilmsDataLoaded, setFilmsDataLoading, setReviewsLoadedStatus, setSelectedFilmLoadedStatus, setSimilarFilmsLoadedStatus} from './actions';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { generatePath } from 'react-router-dom';
import { Review } from '../types/review';



export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoading(true));

    const {data} = await api.get<Film[]>(APIRoute.Films);
    console.log('!!');
    
    
    dispatch(loadFilms(data));
    dispatch(setFilmsDataLoading(false));
    dispatch(setFilmsDataLoaded(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyList));

  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);


export const fetchSelectedFilmAction= createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}> (
  'data/fetchSelectedFilm',
  async(id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(generatePath(APIRoute.Films, {id}));
    dispatch(setSelectedFilmLoadedStatus(false));
    dispatch(loadSelectedFilm(data));
    dispatch(setSelectedFilmLoadedStatus(true));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, (string | undefined), {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(generatePath(APIRoute.Reviews, {id}));
    dispatch(setReviewsLoadedStatus(false));
    dispatch(loadReviews(data));
    dispatch(setReviewsLoadedStatus(true));
  }
  );

export const fetchSimilarFilmsAction = createAsyncThunk<void, string , {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearByOffers',
  async (id, {dispatch, extra: api}) => {
    const path  = generatePath(APIRoute.Similar, {id});
    console.log('path', path);
    const {data} = await api.get<Film[]>(generatePath(APIRoute.Similar, {id}));
    dispatch(setSimilarFilmsLoadedStatus(false));
    dispatch(loadSimilarFilms(data));
    dispatch(setSimilarFilmsLoadedStatus(true));
  }
);