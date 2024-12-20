import { Fragment } from 'react/jsx-runtime';

import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import { Film } from '../../types/film';
import { Link } from 'react-router-dom';

type WelcomeScreenProps = {
    favouriteFilmsCount: number;

    promoFilmTitle: string;
    promoFilmGenre: string;
    promoFilmIssueYear: number;
    films: Film[];
}

function WelcomeScreen({
    favouriteFilmsCount,

    promoFilmTitle,
    promoFilmGenre,
    promoFilmIssueYear,
    films }: WelcomeScreenProps): JSX.Element {
    return (
        <Fragment>
            <section className="film-card">
                <Helmet>
                    <title> Что посмотреть</title>
                </Helmet>
                <div className="film-card__bg">
                    <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
                </div>

                <h1 className="visually-hidden">WTW</h1>

                <header className="page-header film-card__head">
                    <Logo />

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
                    <div className="film-card__info">
                        <div className="film-card__poster">
                            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
                        </div>

                        <div className="film-card__desc">
                            <h2 className="film-card__title">{promoFilmTitle}</h2>
                            <p className="film-card__meta">
                                <span className="film-card__genre">{promoFilmGenre}</span>
                                <span className="film-card__year">{promoFilmIssueYear}</span>
                            </p>

                            <div className="film-card__buttons">
                                <button className="btn btn--play film-card__button" type="button">
                                    <svg viewBox="0 0 19 19" width="19" height="19">
                                        <use xlinkHref="#play-s"></use>
                                    </svg>
                                    <span>Play</span>
                                </button>
                                <Link to='/mylist' ><button className="btn btn--list film-card__button" type="button">
                                    <svg viewBox="0 0 19 20" width="19" height="20">
                                        <use xlinkHref="#add"></use>
                                    </svg>
                                    <span>My list</span>
                                    <span className="film-card__count">{favouriteFilmsCount}</span>
                                </button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="page-content">
                <section className="catalog">
                    <h2 className="catalog__title visually-hidden">Catalog</h2>

                    <ul className="catalog__genres-list">
                        <li className="catalog__genres-item catalog__genres-item--active">
                            <a href="#" className="catalog__genres-link">All genres</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Comedies</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Crime</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Documentary</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Dramas</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Horror</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Kids & Family</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Romance</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Sci-Fi</a>
                        </li>
                        <li className="catalog__genres-item">
                            <a href="#" className="catalog__genres-link">Thrillers</a>
                        </li>
                    </ul>

                    {<FilmCardsList films={films} />}

                    <div className="catalog__more">
                        <button className="catalog__button" type="button">Show more</button>
                    </div>
                </section>

                <footer className="page-footer">
                    <Logo />

                    <div className="copyright">
                        <p>© 2019 What to watch Ltd.</p>
                    </div>
                </footer>
            </div>
        </Fragment>
    )
}

export default WelcomeScreen;