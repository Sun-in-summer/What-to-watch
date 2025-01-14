import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../const';



function SignOut(): JSX.Element {

    const handleLogOut = (evt: React.MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        dispatch(logoutAction());
    }

    const dispatch = useAppDispatch();
    return (
        <Link className="user-block__link" onClick={handleLogOut}
            to={AppRoute.Root}>Sign out</Link>
    )
}

export default SignOut;