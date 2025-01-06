
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from './const';
import WelcomeScreen from './pages/welcome-screen/welcome-screen';
import LoginScreen from './pages/login-screen/login-screen';
import PlayerScreen from './pages/player-screen/player-screen';
import FilmScreen from './pages/film-screen/film-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';
import PrivateRoute from './components/private-route/private-route';
import { Film, Genre } from './types/film';
import AddReviewScreen from './pages/add-review-screen/add-review-screen';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import Spinner from './components/spinner/spinner';
import { useAppSelector } from './hooks';
import { getFilmsDataLoadingStatus } from './store/films-data/selectors';




type AppScreenProps = {

  filmsCardsCount: number;
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmIssueYear: number;
  films: Film[];



  genres: Genre[];

}

function App({

  promoFilmTitle,
  promoFilmGenre,
  promoFilmIssueYear,
  films,


  genres,
}: AppScreenProps): JSX.Element {

  // const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isFilmsDataLoaded = useAppSelector(getFilmsDataLoadingStatus);

  if (isFilmsDataLoaded) {

    console.log("isFilmsDataLoaded", isFilmsDataLoaded);
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <WelcomeScreen

                promoFilmTitle={promoFilmTitle}
                promoFilmGenre={promoFilmGenre}
                promoFilmIssueYear={promoFilmIssueYear}

                genres={genres}
              />
            } />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerScreen films={films} />} />
          <Route
            path={AppRoute.Film}
            element={<FilmScreen />} />

          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <FavoritesScreen />
              </PrivateRoute>

            } />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute >
                <AddReviewScreen films={films} />
              </PrivateRoute>

            } />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>

  )
}

export default App
