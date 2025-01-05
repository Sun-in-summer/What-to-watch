export const DEFAULT_QTY_FILMS_ON_PAGE=8;
export const TIMEOUT_SHOW_ERROR = 2000;

export const Setting = {
    favouriteFilmsCount : 3,
    filmsCardsCount: 20
}


export enum AppRoute {
    Login= '/login',
    Root = '/',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview= '/films/:id/review',
    Player = '/player/:id',
    NotFound = '/not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export enum Genres {
  Fantasy = 'Fantasy',
  Biography = 'Biography',
  Comedy = 'Comedy',
  Drama = 'Drama',
  Crime = "Crime",
  Thriller = 'Thriller',
  SciFi = 'SciFi',
  Adventure= "Adventure",
  Horror = 'Horror', 
  All = "All",
  
  
}


export enum APIRoute {
  Films = '/films',
  Film = '/films/:id',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments/:id',
  Similar = '/films/:id/similar'
}

export const DEFAULT_GENRE = Genres.All as string;

