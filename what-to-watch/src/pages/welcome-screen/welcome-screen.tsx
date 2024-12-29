import { Fragment } from 'react/jsx-runtime';

import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import { Film, Genre } from '../../types/film';
import { Link } from 'react-router-dom';
import GenresList from '../../components/genres-list/genres-list';
import { DEFAULT_QTY_FILMS_ON_PAGE, Genres } from '../../const';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import ShowMoreButton from '../../components/show-more-button/show-more-button';



type WelcomeScreenProps = {
    favouriteFilmsCount: number;

    promoFilmTitle: string;
    promoFilmGenre: string;
    promoFilmIssueYear: number;
    films: Film[];
    genres: Genre[];

}

function WelcomeScreen({
    favouriteFilmsCount,
    promoFilmTitle,
    promoFilmGenre,
    promoFilmIssueYear,
    films,

    genres
}: WelcomeScreenProps): JSX.Element {

    const [shownFilmsCount, setShownFilmsCount] = useState(DEFAULT_QTY_FILMS_ON_PAGE);

    const selectedGenre: Genre = useAppSelector(state => state.genre);

    useEffect(() => {
        setShownFilmsCount(DEFAULT_QTY_FILMS_ON_PAGE);
    }, [selectedGenre]);


    function getFilmsByGenre(genre: Genre): Film[] {
        if (genre === Genres.All) {
            return films;
        }
        return films.filter(film => film.genre === genre);
    }


    const filteredFilms = getFilmsByGenre(selectedGenre);
    const filmsToShow = filteredFilms.slice(0, shownFilmsCount);
    const handleShowMore = () => {
        setShownFilmsCount((prevCount) => Math.min(prevCount + DEFAULT_QTY_FILMS_ON_PAGE, filteredFilms.length));
    };

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

                    <GenresList genres={genres} selectedGenre={selectedGenre} />
                    {<FilmCardsList films={filmsToShow} />}



                    {shownFilmsCount < filteredFilms.length && (
                        <ShowMoreButton onClick={handleShowMore} />
                    )}
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