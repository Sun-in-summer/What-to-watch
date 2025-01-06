import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Film } from '../types/film';
import { APIRoute,  } from '../const';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { generatePath } from 'react-router-dom';
import { Review, ServerReview } from '../types/review';
import adaptReviewToFrontend from '../utils/adaptToFrontend';
import { toast } from 'react-toastify';
import { redirectBack } from './actions';



export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { extra: api}) => {
       const {data} = await api.get<Film[]>(APIRoute.Films);
       return data;
    }
);


export const fetchFavoriteFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, { extra: api}) => {
       const {data} = await api.get<Film[]>(APIRoute.Favorite);
       return data;
    }
);




export const checkAuthAction = createAsyncThunk<UserData , undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {

    try {
      
      const {data} = await api.get(APIRoute.Login);
      if (data) {
          dispatch(fetchFavoriteFilmsAction());
      }

      return data;
        }
catch {
  toast.warn('You are not authorized. Please log in');
  
}
throw new Error();

       
  }
);

export const loginAction = createAsyncThunk<UserData | null, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, { dispatch, extra: api}) => {
     try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectBack());
      return data;
    } catch {
      toast.warn('Unable to login, please try later');
    }
    throw new Error();
  
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();

  },
);


export const fetchSelectedFilmAction= createAsyncThunk<Film, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}> (
  'data/fetchSelectedFilm',
  async(id, { extra: api}) => {
    const path = generatePath(APIRoute.Film, {id});
    const {data} = await api.get<Film>(path);
  return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], (string  ), {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (id, {extra: api}) => {
    const path = generatePath(APIRoute.Reviews, {id});
   
    const {data} = await api.get<ServerReview[]>(path);
    const reviews : Review[] = data.map(adaptReviewToFrontend);
    return reviews;
  }
  );

export const fetchSimilarFilmsAction = createAsyncThunk<Film[], string , {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (id, { extra: api}) => {
    const {data} = await api.get<Film[]>(generatePath(APIRoute.Similar, {id}));
    return data;
  }
);