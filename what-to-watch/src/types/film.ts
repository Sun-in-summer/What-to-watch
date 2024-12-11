

export type Film = {
    id: number,
    title: string,
    images: FilmImages,
    videos: FilmVideos,
    description: string,
    rating: number,
    scoresCount: number,
    director: string;
    starring: string[],
    runtimeInMinutes: number,
    genre: string, //todo
    releaseYear: number,
    isFavorite: boolean
    reviews: number[]
}

export type FilmImages ={
    posterSrc: string,
    previewSrc: string,
    backgroundSrc: string,
    backgroundColor: string
}

export type FilmVideos ={
    videoLink: string,
    previewVideoLink: string
}

export type DetailsType = {
   director: string;
   starring: string[];
   runtime: number | null;
   genre: string;
   released: number | null;
}

export type OverviewType = {
        description: string,
        rating: number | null,
       scoresCount: number | null,
        director: string,
        starring: string,
    }