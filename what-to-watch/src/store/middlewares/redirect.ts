import {PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {reducer} from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action) => {
         const typedAction = action as PayloadAction<string>;
        if (typedAction.type === 'main/redirectToRoute' ) {
          browserHistory.push(typedAction.payload );
        }
        return next(action);
      };

export default redirect;