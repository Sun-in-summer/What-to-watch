import {store} from '../store';
import { setServerError } from '../store/actions';
import {clearErrorAction} from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setServerError(message));
  store.dispatch(clearErrorAction());
};