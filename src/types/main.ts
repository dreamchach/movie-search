export interface IMovieDetail {
    title: string;
    name: string;
    original_name: string;
    overview: string;
    videos : IVideo;
    backdrop_path : string;
}
export interface IVideo {
    results : [{
        key : string;
    }]
}

export interface IRowMovie {
    id : number;
    name : string;
    title : string;
    backdrop_path : string;
}

export interface IModalMovie {
    backdrop_path : string;
    release_date? : string;
    first_air_date? : string;
    title? : string;
    name? : string;
    vote_average : number;
    overview : string;
}