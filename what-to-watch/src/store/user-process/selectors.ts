import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';


export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: State): UserData | null => state[NameSpace.User].userInfo;