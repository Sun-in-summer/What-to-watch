// import { Fragment } from 'react/jsx-runtime';

import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import { Genre } from '../../types/film';
import GenresList from '../../components/genres-list/genres-list';
import { DEFAULT_QTY_FILMS_ON_PAGE } from '../../const';
import { useAppSelector } from '../../hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import MyList from '../../components/my-list/my-list';
import UserBlock from '../../components/user-block/user-block';
import { getSelectedGenre } from '../../store/select-genre-process/selectors';
import { selectFilteredFilms } from '../../store/composedSelectors';




type WelcomeScreenProps = {
    promoFilmTitle: string;
    promoFilmGenre: string;
    promoFilmIssueYear: number;
    genres: Genre[];
}

function WelcomeScreen({

    promoFilmTitle,
    promoFilmGenre,
    promoFilmIssueYear,

    genres
}: WelcomeScreenProps): JSX.Element {


    const selectedGenre: Genre = useAppSelector(getSelectedGenre);


    const [shownFilmsCount, setShownFilmsCount] = useState(DEFAULT_QTY_FILMS_ON_PAGE);



    useEffect(() => {
        setShownFilmsCount(DEFAULT_QTY_FILMS_ON_PAGE);
    }, [selectedGenre]);


    const filteredFilms = useAppSelector(selectFilteredFilms);
    const filmsToShow = useMemo(() => filteredFilms.slice(0, shownFilmsCount), [filteredFilms, shownFilmsCount]);
    const handleShowMore = useCallback(() => {
        setShownFilmsCount((prevCount) => Math.min(prevCount + DEFAULT_QTY_FILMS_ON_PAGE, filteredFilms.length));
    }, [filteredFilms.length]);


    return (
        <>
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
                    <UserBlock />
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
                                <MyList />

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
        </>
    )
}

export default WelcomeScreen;