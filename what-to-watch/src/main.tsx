import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Genres, Setting } from './const.ts';
import { films } from './mocks/films.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { Genre } from './types/film.ts';
import { fetchFilmsAction } from './store/api-actions.ts';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DEFAULT_FILM_TITLE = "The Grand Budapest Hotel";
const DEFAULT_GENRE = "All";
const DEFAULT_YEAR = 2014;
const genres: Genre[] = Object.values(Genres);

store.dispatch(fetchFilmsAction());
// store.dispatch(checkAuthAction());


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

      <App

        filmsCardsCount={Setting.filmsCardsCount}
        promoFilmTitle={DEFAULT_FILM_TITLE}
        promoFilmGenre={DEFAULT_GENRE}
        promoFilmIssueYear={DEFAULT_YEAR}
        films={films}
        genres={genres}

      />
      {/* <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover /> */}
    </Provider>
  </StrictMode>,
)
