
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from './const';
import WelcomeScreen from './pages/welcome-screen/welcome-screen';
import LoginScreen from './pages/login-screen/login-screen';
import PlayerScreen from './pages/player-screen/player-screen';
import FilmScreen from './pages/film-screen/film-screen';
import FavoritesScreen from './pages/favorites-screen/favorites-screen';
import FeedbackScreen from './pages/feedback-screen/feedback-screen';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';
import PrivateRoute from './components/private-route/private-route';


type AppScreenProps = {
  favouriteFilmsCount: number;
  filmsCardsCount: number;
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmIssueYear: number;
}

function App({
  favouriteFilmsCount,
  filmsCardsCount,
  promoFilmTitle,
  promoFilmGenre,
  promoFilmIssueYear }: AppScreenProps): JSX.Element {


  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <WelcomeScreen
                favouriteFilmsCount={favouriteFilmsCount}
                filmsCardsCount={filmsCardsCount}
                promoFilmTitle={promoFilmTitle}
                promoFilmGenre={promoFilmGenre}
                promoFilmIssueYear={promoFilmIssueYear} />
            } />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerScreen />} />
          <Route
            path={AppRoute.Film}
            element={<FilmScreen />} />

          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen />
              </PrivateRoute>

            } />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FeedbackScreen />
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
