
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from './const';
import WelcomeScreen from './pages/welcome-screen/welcome-screen';
import LoginScreen from './pages/login-screen/login-screen';
import PlayerScreen from './pages/player-screen/player-screen';
import FilmScreen from './pages/film-screen/film-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';
import PrivateRoute from './components/private-route/private-route';
import { Film } from './types/film';
import { Review } from './types/review';
import AddReviewScreen from './pages/add-review-screen/add-review-screen';


type AppScreenProps = {
  favouriteFilmsCount: number;
  filmsCardsCount: number;
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmIssueYear: number;
  films: Film[];
  favoriteFilms: Film[];
  reviews: Review[][]

}

function App({
  favouriteFilmsCount,

  promoFilmTitle,
  promoFilmGenre,
  promoFilmIssueYear,
  films,
  favoriteFilms }: AppScreenProps): JSX.Element {


  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <WelcomeScreen
                favouriteFilmsCount={favouriteFilmsCount}
                promoFilmTitle={promoFilmTitle}
                promoFilmGenre={promoFilmGenre}
                promoFilmIssueYear={promoFilmIssueYear}
                films={films} />
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
            element={<FilmScreen films={films} />} />

          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen favoriteFilms={favoriteFilms} />
              </PrivateRoute>

            } />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <AddReviewScreen films={films} />
              </PrivateRoute>

            } />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  )
}

export default App
