import FilmCardsList from '../../components/film-cards-list/film-cards-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms, getFavoriteFilmsCount, getFavoriteFilmsLoadingStatus } from '../../store/films-data/selectors';
import { Film } from '../../types/film';
import LoadingScreen from '../loading-screen/loading-screen';



function FavoritesScreen(): JSX.Element {


    const isFavoritesFilmsLoading = useAppSelector(getFavoriteFilmsLoadingStatus);
    const favouriteFilms: Film[] = useAppSelector(getFavoriteFilms);
    const favoriteFilmsCount: number = useAppSelector(getFavoriteFilmsCount);



    if (isFavoritesFilmsLoading) {
        return (
            <LoadingScreen />
        );
    }


    return (
        <div className="user-page">
            <header className="page-header user-page__head">
                < Logo />

                <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilmsCount}</span></h1>
                <UserBlock />
            </header>

            <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <FilmCardsList films={favouriteFilms} />
            </section>

            <footer className="page-footer">
                < Logo />

                <div className="copyright">
                    <p>© 2019 What to watch Ltd.</p>
                </div>
            </footer>
        </div>
    )
}

export default FavoritesScreen;