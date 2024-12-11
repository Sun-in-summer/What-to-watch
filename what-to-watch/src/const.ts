

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


export enum Genre {
  Fantasy = 'Fantasy',
  Biography = 'Biography',
  Comedy = 'Comedy',
  Drama = 'Drama',
  Crime = "Crime",
  Thriller = 'Thriller',
  SciFi = 'Sci-Fi',
  Adventure= "Adventure",
  Horror = 'Horror', 
  
}

export const DEFAULT_GENRE = Genre.Comedy as string;