import { Link, NavLink, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { DetailsType, OverviewType } from '../../types/film';
import { AppRoute } from '../../const';
import { Review } from '../../types/review';
import Tabs from '../../components/tabs/tabs';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Fragment, useEffect } from 'react';
import { fetchReviewsAction, fetchSelectedFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import { getReviewsData, getSelectedFilmData, getSimilarFilmsData } from '../../store/films-data/selectors';
import MyList from '../../components/my-list/my-list';

function FilmScreen(): JSX.Element {

    const { id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id !== undefined) {
            dispatch(fetchSelectedFilmAction(id));
            dispatch(fetchReviewsAction(id));
            dispatch(fetchSimilarFilmsAction(id));
        }
    }, [dispatch, id])

    const currentFilm = useAppSelector(getSelectedFilmData);
    const reviews: Review[] = useAppSelector(getReviewsData);
    const similarFilms = useAppSelector(getSimilarFilmsData);

    const overview: OverviewType = {
        description: currentFilm?.description || '',
        rating: currentFilm?.rating || null,
        scoresCount: currentFilm?.scoresCount || null,
        director: currentFilm?.director || '',
        starring: currentFilm?.starring?.join(', ') || ''
    }
    const details: DetailsType = {
        director: currentFilm?.director || '',
        genre: currentFilm?.genre || '',
        starring: currentFilm?.starring || [],
        runtime: currentFilm?.runTime || null,
        released: currentFilm?.released || null
    }

    return (
        <Fragment>
            <section className="film-card film-card--full">
                <div className="film-card__hero">
                    <div className="film-card__bg">
                        <img src={currentFilm?.backgroundSrc} alt={currentFilm?.name} />
                    </div>

                    <h1 className="visually-hidden">WTW</h1>

                    <header className="page-header film-card__head">
                        < Logo />

                        <UserBlock />
                    </header>

                    <div className="film-card__wrap">
                        <div className="film-card__desc">
                            <h2 className="film-card__title">{currentFilm?.name}</h2>
                            <p className="film-card__meta">
                                <span className="film-card__genre">{currentFilm?.genre}</span>
                                <span className="film-card__year">{currentFilm?.released}</span>
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

                                <MyList />

                                <NavLink to={AppRoute.AddReview.replace(':id', id!.toString())} className="btn film-card__button">Add review</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="film-card__wrap film-card__translate-top">


                    <div className="film-card__info">
                        <div className="film-card__poster film-card__poster--big">
                            <img src={currentFilm?.previewImage} alt={currentFilm?.name} width="218" height="327" />
                        </div>

                        <div className="film-card__desc">
                            <Tabs
                                overview={overview}
                                reviews={reviews}
                                details={details} /></div>
                    </div>
                </div>
            </section ><div className="page-content">
                <section className="catalog catalog--like-this">
                    <h2 className="catalog__title">More like this</h2>

                    <div className="catalog__films-list">
                        <FilmCardsList films={similarFilms} />

                    </div>
                </section>

                <footer className="page-footer">
                    <div className="logo">
                        <a href="main.html" className="logo__link logo__link--light">
                            <span className="logo__letter logo__letter--1">W</span>
                            <span className="logo__letter logo__letter--2">T</span>
                            <span className="logo__letter logo__letter--3">W</span>
                        </a>
                    </div>

                    <div className="copyright">
                        <p>© 2019 What to watch Ltd.</p>
                    </div>
                </footer>
            </div>
        </Fragment>

    )
}

export default FilmScreen;
