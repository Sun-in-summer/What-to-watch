import { Film } from '../../types/film';

type FilmCardProps = {
    film: Film;
    onHover: () => void;
    isActive: boolean;
}

function FilmCard(props: FilmCardProps): JSX.Element {
    const { film } = props;
    return (
        <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
                <img src={film.images.previewSrc} alt={film.title} width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">{film.title}</a>
            </h3>
        </article>
    )
}

export default FilmCard;