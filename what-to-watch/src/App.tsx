
import './App.css'
import WelcomeScreen from './pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  favouriteFilmsCount: number;
  filmsCardsCount: number;
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmIssueYear: number;
}

function App({ favouriteFilmsCount, filmsCardsCount, promoFilmTitle, promoFilmGenre, promoFilmIssueYear }: AppScreenProps): JSX.Element {


  return (
    <WelcomeScreen
      favouriteFilmsCount={favouriteFilmsCount}
      filmsCardsCount={filmsCardsCount}
      promoFilmTitle={promoFilmTitle}
      promoFilmGenre={promoFilmGenre}
      promoFilmIssueYear={promoFilmIssueYear} />
  )
}

export default App
