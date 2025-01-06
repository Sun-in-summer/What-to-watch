import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state'
import { checkAuthAction } from '../api-actions';
import { userProcess } from './user-process';

describe ('Reducer: user-process', ()=> {
    let state: UserProcess;

    beforeEach(()=> {
        state={
            authorizationStatus: AuthorizationStatus.Unknown,
            userInfo: null,
        }
    });
    describe ('checkAuthAction' , ()=> {
    it ('should set authorizationStatus NoAuth if checkAuthAction is rejected', ()=>
      expect(userProcess.reducer(state, {type: checkAuthAction.rejected.type, payload: ''}))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, userInfo: null}));
    it ('should set authorizationStatus Auth if checkAuthAction is fulfilled', ()=>
      expect(userProcess.reducer(state, {type: checkAuthAction.fulfilled.type, payload: ('some name')}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, userInfo: 'some name'}));
  });

})