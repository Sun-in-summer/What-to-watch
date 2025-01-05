import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';

function UserBlock(): JSX.Element {

    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const userAvatar = useAppSelector((state) => state.userAvatar);

    return (<ul className="user-block">
        <li className="user-block__item">
            <div className="user-block__avatar">
                <img src={userAvatar ? userAvatar : "img/avatar.jpg"} alt="User avatar" width="63" height="63" />
            </div>
        </li>
        <li className="user-block__item">
            {authorizationStatus === AuthorizationStatus.Auth ? <SignOut /> : <SignIn />}
        </li>
    </ul>);
}

export default UserBlock;