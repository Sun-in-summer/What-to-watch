import React from 'react';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function UserBlock(): JSX.Element {

    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    // const userAvatar = useAppSelector((state) => state.userAvatar);

    return (<ul className="user-block">
        <li className="user-block__item">
            <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
        </li>
        <li className="user-block__item">
            {authorizationStatus === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />}
        </li>
    </ul>);
}

export default React.memo(UserBlock);