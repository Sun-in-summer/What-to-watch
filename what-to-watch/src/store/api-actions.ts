import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../types/film';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { loadFilms, loadReviews, loadSelectedFilm, loadSimilarFilms, redirectToRoute, requireAuthorization, setFilmsDataLoaded,  setReviewsLoadedStatus, setSelectedFilmLoadedStatus, setSimilarFilmsLoadedStatus} from './actions';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { generatePath } from 'react-router-dom';
import { Review, ServerReview } from '../types/review';
import { toast } from 'react-toastify';
import adaptReviewToFrontend from '../utils/adaptToFrontend';



export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
     try {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      dispatch(setFilmsDataLoaded(true));  
      dispatch(loadFilms(data));
      }
      catch (error) {
      console.error("Failed to fetch films:", error);
      toast.warn("Failed to load films. Please try again.");
      } 
      finally {
     dispatch(setFilmsDataLoaded(false));
      }
  }
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
    const path = generatePath(APIRoute.Film, {id});
    const {data} = await api.get<Film>(path);
    dispatch(setSelectedFilmLoadedStatus(false));
    dispatch(loadSelectedFilm(data));
    dispatch(setSelectedFilmLoadedStatus(true));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, (string ), {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {dispatch, extra: api}) => {
    const path = generatePath(APIRoute.Reviews, {id});
    
    console.log(path);
    const {data} = await api.get<ServerReview[]>(path);
    const reviews : Review[] = data.map(adaptReviewToFrontend);
    console.log(reviews);
    dispatch(setReviewsLoadedStatus(false));
    dispatch(loadReviews(reviews));
    dispatch(setReviewsLoadedStatus(true));
  }
  );

export const fetchSimilarFilmsAction = createAsyncThunk<void, string , {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(generatePath(APIRoute.Similar, {id}));
    dispatch(setSimilarFilmsLoadedStatus(false));
    dispatch(loadSimilarFilms(data));
    dispatch(setSimilarFilmsLoadedStatus(true));
  }
);