import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';



function SignIn(): JSX.Element {

    return (
        <Link className="user-block__link"
            to={AppRoute.Login}>Sign in</Link>
    )
}

export default SignIn;