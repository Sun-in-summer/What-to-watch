import { DetailsType } from '../../types/film';

type DetailsProps = {
    details: DetailsType;
}

function Details({ details }: DetailsProps): JSX.Element {

    const { director, starring, runtime, genre, released } = details;
    return (
        <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
                <div className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{director}</span>
                </div>
                <div className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                        {starring.map((starringItem) => (<div key={starringItem}>{starringItem}</div>))}
                    </span>
                </div>
            </div>

            <div className="film-card__text-col">
                <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">{runtime}</span>
                </p>
                <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">{genre}</span>
                </p>
                <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">{released}</span>
                </p>
            </div>
        </div>
    )
}

export default Details;