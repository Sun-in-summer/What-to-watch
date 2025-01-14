import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { UserData } from './user-data.js';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch; 

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | null,
};