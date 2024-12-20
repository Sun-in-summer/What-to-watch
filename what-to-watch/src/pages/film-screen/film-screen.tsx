import { Link, NavLink, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { DetailsType, Film, OverviewType } from '../../types/film';
import { AppRoute } from '../../const';
import { Review } from '../../types/review';
import Tabs from '../../components/tabs/tabs';


type FilmScreenProps = {
    films: Film[];
    reviews: Review[]
}

function FilmScreen({ films, reviews }: FilmScreenProps): JSX.Element {

    const { id } = useParams();

    const currentFilm = films.find((film) => film.id.toString() === id);
    const reviewsIds: number[] = currentFilm?.reviews || [];
    const currentFilmReviews: Review[] = reviews.filter((review) => reviewsIds.includes(review.id));
    const overview: OverviewType = {
        description: currentFilm?.description || '',
        rating: currentFilm?.rating || null,
        scoresCount: currentFilm?.scoresCount || null,
        director: currentFilm?.director || '',
        starring: currentFilm?.starring.join(', ') || ''
    }
    const details: DetailsType = {
        director: currentFilm?.director || '',
        genre: currentFilm?.genre || '',
        starring: currentFilm?.starring || [],
        runtime: currentFilm?.runtimeInMinutes || null,
        released: currentFilm?.releaseYear || null
    }

    console.log(reviewsIds);
    console.log(reviews);

    // console.log(currentFilmReviews);

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
                        <img src={currentFilm?.images.posterSrc} alt={currentFilm?.title} width="218" height="327" />
                    </div>

                    <div className="film-card__desc">
                        <Tabs
                            overview={overview}
                            reviews={currentFilmReviews}
                            details={details} /></div>
                </div>
            </div>
        </section >
    )
}

export default FilmScreen;
