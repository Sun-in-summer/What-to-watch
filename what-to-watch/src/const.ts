export const Setting = {
    favouriteFilmsCount : 3,
    filmsCardsCount: 20
}


export enum AppRoute {
    Login= '/login',
    Root = '/',
    MyList = 'mylist',
    Film = '/films/:id',
    AddReview= '/films/:id:review',
    Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}