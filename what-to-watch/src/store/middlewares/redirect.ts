import {PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import { rootReducer } from '../root-reducer';


type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action) => {
         const typedAction = action as PayloadAction<string>;
        if (typedAction.type === 'main/redirectToRoute' ) {
          browserHistory.push(typedAction.payload );
        }
        if (typedAction.type === 'main/redirectBack') {
        browserHistory.back();
      }
        return next(action);
      };

export default redirect;