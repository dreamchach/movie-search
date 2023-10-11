export interface IMovieDetail {
    title: string;
    name: string;
    original_name: string;
    overview: string;
    videos : IVideo;
    backdrop_path : string;
    id : string;
}
export interface IVideo {
    results : [{
        key : string;
    }]
}

export interface IRowMovie {
    id? : number;
    title? : string;
    backdrop_path? : string;
    release_date? : string;
    vote_average? : number;
    overview? : string;
    genre_ids : number[];
}

export interface IGenres {
    id : number;
    name : string;
}

export interface IDetailMovie {
    adult? : boolean;
    genres? : IGenres[];
    id? : number;
    original_title? : string;
    overview? : string;
    poster_path? : string;
    production_countries? : IGenres[];
    release_date? : string;
    runtime? : number;
    tagline? : string;
    title? : string;
    video? : IVideo;
    vote_average? : number;
    popularity? : number;
}