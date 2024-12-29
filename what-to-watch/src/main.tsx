import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Genres, Setting } from './const.ts';
import { reviews } from './mocks/reviews.ts';
import { films } from './mocks/films.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { Genre } from './types/film.ts';

const DEFAULT_FILM_TITLE = "The Grand Budapest Hotel";
const DEFAULT_GENRE = "All";
const DEFAULT_YEAR = 2014;
const genres: Genre[] = Object.values(Genres);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App
        favouriteFilmsCount={Setting.favouriteFilmsCount}
        filmsCardsCount={Setting.filmsCardsCount}
        promoFilmTitle={DEFAULT_FILM_TITLE}
        promoFilmGenre={DEFAULT_GENRE}
        promoFilmIssueYear={DEFAULT_YEAR}
        films={films}
        favoriteFilms={films}
        reviews={reviews}
        genres={genres}
        selectedGenre={DEFAULT_GENRE}
      />
    </Provider>
  </StrictMode>,
)
