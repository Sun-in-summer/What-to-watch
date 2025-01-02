import { Link } from 'react-router-dom';



function SignIn(): JSX.Element {

    return (
        <Link className="user-block__link"
            to='/login'>Sign in</Link>
    )
}

export default SignIn;