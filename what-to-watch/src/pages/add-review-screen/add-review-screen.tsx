import { useParams } from 'react-router-dom';
import { Film } from '../../types/film';
import Logo from '../../components/logo/logo';
import AddReviewForm from '../../components/add-review/add-review';

type AddReviewScreenProps = {
    films: Film[];
}

function AddReviewSCreen({ films }: AddReviewScreenProps): JSX.Element {

    const { id } = useParams();
    const currentFilm = films.find((film) => film.id.toString() === id);

    return (
        <section className="film-card film-card--full">
            <div className="film-card__header">
                <div className="film-card__bg">
                    <img src={currentFilm?.images.backgroundSrc} />
                </div>

                <h1 className="visually-hidden">WTW</h1>

                <header className="page-header">
                    < Logo />

                    <nav className="breadcrumbs">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item">
                                <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
                            </li>
                            <li className="breadcrumbs__item">
                                <a className="breadcrumbs__link">Add review</a>
                            </li>
                        </ul>
                    </nav>



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

                <div className="film-card__poster film-card__poster--small">
                    <img src={currentFilm?.images.posterSrc} alt={currentFilm?.title} width="218" height="327" />
                </div>
            </div>

            <AddReviewForm />

        </section>
    );
}

export default AddReviewSCreen;