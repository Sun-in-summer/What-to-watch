import { useState } from 'react';
import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmCardsListProps = {
    films: Film[];
}

function FilmCardsList({ films }: FilmCardsListProps): JSX.Element {
    const [activeFilmId, setActiveFilmId] = useState<number | null>(null);
    return (
        <div className="catalog__films-list">
            {films.map((film) => <FilmCard film={film} key={`${film.id}`} onHover={() => setActiveFilmId(film.id)} isActive={film.id === activeFilmId} />)}


        </div>
    );
}

export default FilmCardsList;