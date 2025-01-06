import LoginForm from '../../components/login-form/login-form';
import Logo from '../../components/logo/logo';



function LoginScreen(): JSX.Element {
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