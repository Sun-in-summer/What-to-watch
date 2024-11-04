import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Setting } from './const.ts';

const DEFAULT_FILM_TITLE = "The Grand Budapest Hotel";
const DEFAULT_GENRE = "Drama";
const DEFAULT_YEAR = 2014;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App
      favouriteFilmsCount={Setting.favouriteFilmsCount}
      filmsCardsCount={Setting.filmsCardsCount}
      promoFilmTitle={DEFAULT_FILM_TITLE}
      promoFilmGenre={DEFAULT_GENRE}
      promoFilmIssueYear={DEFAULT_YEAR}

    />
  </StrictMode>,
)
