import { OverviewType } from '../../types/film';

type OverviewProps = {
    overview: OverviewType;
};

function Overview({ overview }: OverviewProps): JSX.Element {

    const { rating, scoresCount, description, director, starring } = overview;
    return (
        <div className="film-card__info">


            <div className="film-card__desc">
                {/* <nav className="film-nav film-card__nav">
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
                </nav> */}

                <div className="film-rating">
                    <div className="film-rating__score">{rating}</div>
                    <p className="film-rating__meta">
                        <span className="film-rating__level">Very good</span>
                        <span className="film-rating__count">{scoresCount} ratings</span>
                    </p>
                </div>

                <div className="film-card__text">
                    <p>{description}</p>

                    <p className="film-card__director"><strong>Director: {director}</strong></p>

                    <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
                </div>
            </div>



        </div>
    )
}

export default Overview;