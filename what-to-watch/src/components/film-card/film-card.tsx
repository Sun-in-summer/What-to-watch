import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import { useCallback, useState } from 'react';
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

    const handleMouseEnter = () => {
        const timeout = setTimeout(() => {
            setIsPlaying(true);
        }, 1000);
        setHoverTimeout(timeout);
    };


    const handleMouseLeave = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        setIsPlaying(false);
    };

    const handleVideoEnd = useCallback(() => {
        setIsPlaying(false);
    }, []);


    return (
        <article
            className="small-film-card catalog__films-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isPlaying ? (
                <VideoPlayer
                    src={film.previewVideoLink}
                    poster={film.previewImage}
                    isPlaying={isPlaying}
                    onEnd={handleVideoEnd} />
            ) : (<div className="small-film-card__image">
                <img src={film.previewImage} alt={film.name} width="280" height="175" />
            </div>)}

            <h3 className="small-film-card__title">
                <NavLink className="small-film-card__link" to={AppRoute.Film.replace(':id', id.toString())}>{film.name}</NavLink>
            </h3>
        </article>
    )
}

export default FilmCard;