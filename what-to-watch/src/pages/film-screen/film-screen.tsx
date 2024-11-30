import { Link, NavLink, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { Film } from '../../types/film';
import { AppRoute } from '../../const';

type FilmScreenProps = {
    films: Film[];
}

function FilmScreen({ films }: FilmScreenProps): JSX.Element {

    const { id } = useParams();

    const currentFilm = films.find((film) => film.id.toString() === id)

    return (
        <section className="film-card film-card--full">
            <div className="film-card__hero">
                <div className="film-card__bg">
                    <img src={currentFilm?.images.backgroundSrc} alt={currentFilm?.title} />
                </div>

                <h1 className="visually-hidden">WTW</h1>

                <header className="page-header film-card__head">
                    < Logo />

                    <ul className="user-block">
                        <li className="user-block__item">
                            <div className="user-block__avatar">
                                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                            </div>
                        </li>
                        <li className="user-block__item">
                            <a className="user-block__link">Sign out</a>
                        </li>
                    </ul>
                </header>

                <div className="film-card__wrap">
                    <div className="film-card__desc">
                        <h2 className="film-card__title">{currentFilm?.title}</h2>
                        <p className="film-card__meta">
                            <span className="film-card__genre">{currentFilm?.genre}</span>
                            <span className="film-card__year">{currentFilm?.releaseYear}</span>
                        </p>

                        <div className="film-card__buttons">

                            <Link to={AppRoute.Player} className="film-card__button">
                                <button className="btn btn--play film-card__button" type="button">

                                    <svg viewBox="0 0 19 19" width="19" height="19">
                                        <use xlinkHref="#play-s"></use>
                                    </svg>
                                    <span>Play</span>

                                </button>
                            </Link>

                            <Link to={AppRoute.MyList} className="film-card__button" ><button className="btn btn--list film-card__button" type="button">
                                <svg viewBox="0 0 19 20" width="19" height="20">
                                    <use xlinkHref="#add"></use>
                                </svg>
                                <span>My list</span>
                                <span className="film-card__count">9</span>
                            </button></Link>
                            <NavLink to={AppRoute.AddReview.replace(':id', id!.toString())} className="btn film-card__button">Add review</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="film-card__wrap film-card__translate-top">
                <div className="film-card__info">
                    <div className="film-card__poster film-card__poster--big">
                        <img src={currentFilm?.images.posterSrc} alt={`${currentFilm?.title} poster`} width="218" height="327" />
                    </div>

                    <div className="film-card__desc">
                        <nav className="film-nav film-card__nav">
                            <ul className="film-nav__list">
                                <li className="film-nav__item film-nav__item--active">
                                    <a href="#" className="film-nav__link">Overview</a>
                                </li>
                                <li className="film-nav__item">
                                    <a href="#" className="film-nav__link">Details</a>
                                </li>
                                <li className="film-nav__item">
                                    <a href="#" className="film-nav__link">Reviews</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="film-rating">
                            <div className="film-rating__score">{currentFilm?.rating}</div>
                            <p className="film-rating__meta">
                                <span className="film-rating__level">Very good</span>
                                <span className="film-rating__count">{currentFilm?.scoresCount} ratings</span>
                            </p>
                        </div>

                        <div className="film-card__text">
                            <p>{currentFilm?.description}</p>

                            <p className="film-card__director"><strong>Director: {currentFilm?.director}</strong></p>

                            <p className="film-card__starring"><strong>Starring: {currentFilm?.starring.join(', ')}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FilmScreen;