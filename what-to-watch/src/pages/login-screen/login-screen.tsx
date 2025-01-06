import LoginForm from '../../components/login-form/login-form';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';



function LoginScreen(): JSX.Element {

    const authorization = useAppSelector(getAuthorizationStatus);

    const dispatch = useAppDispatch();

    if (authorization === AuthorizationStatus.Auth) {
        dispatch(redirectToRoute(AppRoute.Root));
    }


    return (
        <div className="user-page">
            <header className="page-header user-page__head">
                <Logo />
                <h1 className="page-title user-page__title">Sign in</h1>
            </header>
            <div className="sign-in user-page__content">
                <LoginForm />
            </div>
            <footer className="page-footer">
                < Logo />
                <div className="copyright">
                    <p>© 2019 What to watch Ltd.</p>
                </div>
            </footer>
        </div>
    )
}
export default LoginScreen;