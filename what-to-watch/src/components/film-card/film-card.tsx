import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import { useState } from 'react';
import VideoPlayer from '../video-player/video-player';


type FilmCardProps = {
    film: Film;
    onHover: () => void;
    isActive: boolean;
}

function FilmCard({ film }: FilmCardProps): JSX.Element {

    const { id } = film;
    const [isPlaying, setIsPlaying] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => { //добавить useCallback
        const timeout = setTimeout(() => {
            setIsPlaying(true);
        }, 1000);
        setHoverTimeout(timeout);
    }


    const handleMouseLeave = () => { //useCallback
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setIsPlaying(false);
    }

    const handleVideoEnd = () => {
        setIsPlaying(false);
    }



    return (
        <article
            className="small-film-card catalog__films-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isPlaying ? (
                <VideoPlayer
                    src={film.videos.previewVideoLink}
                    poster={film.images.previewSrc}
                    isPlaying={isPlaying}
                    onEnd={handleVideoEnd} />
            ) : (<div className="small-film-card__image">
                <img src={film.images.previewSrc} alt={film.title} width="280" height="175" />
            </div>)}

            <h3 className="small-film-card__title">
                <NavLink className="small-film-card__link" to={AppRoute.Film.replace(':id', id.toString())}>{film.title}</NavLink>
            </h3>
        </article>
    )
}

export default FilmCard;