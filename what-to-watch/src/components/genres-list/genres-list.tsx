import { useAppDispatch } from '../../hooks';
import { setGenre } from '../../store/actions';
import { Genre } from '../../types/film';


type GenresListProps = {
    genres: Genre[];
    selectedGenre: Genre | undefined;

};

function GenresList({ genres, selectedGenre }: GenresListProps): JSX.Element {

    const dispatch = useAppDispatch();
    const handleGenreClick = (genre: Genre) => {
        dispatch(setGenre(genre));
    };


    return (
        <ul className="catalog__genres-list">
            {genres.map((genre) => (<li className={`catalog__genres-item ${selectedGenre && genre === selectedGenre ? 'catalog__genres - item--active' : ''}`} >
                <a href="#" className="catalog__genres-link" onClick={() => handleGenreClick(genre)}>{genre}</a>
            </li>))
            }
        </ul >
    );

}


export default GenresList;
