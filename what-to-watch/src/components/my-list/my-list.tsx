import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';




function MyList(): JSX.Element {



    const favouriteFilmsCount = useAppSelector((state) => state.favoriteFilmsCount);
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    console.log(authorizationStatus);


    return (
        <Link to='/mylist' ><button className="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">{favouriteFilmsCount}</span>
        </button></Link>
    )
}

export default MyList;