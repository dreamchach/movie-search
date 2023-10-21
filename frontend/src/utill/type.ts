export interface IMainMovie {
    vote_average : number;
    title : string;
    id : number;
    genre_ids : number[]
    backdrop_path : string;
    overview?: string;
}
export interface IBanner {
    movie : IMainMovie;
}
export interface INowPlayRow {
    movieData : IMainMovie[];
}
export interface IGenreData {
    id? : number;
    name : string;
}
export interface IRowData {
    item : IMainMovie;
}
export interface IGenres {
    genreId : number[];
}
export interface IRow {
    movies : string;
}
export interface IDetailProps {
    id : string;
}
export interface IDetailTitle {
    title : string;
    data : string;
}
export interface IVideos {
    id : string;
    key : string;
    name : string;
    published_at : string;
    site : string;
}
export interface ICollect {
    id : string;
    collectId : string;
}
export interface ICollectProps {
    id : number;
    poster_path : string;
    release_date : string;
    title : string;
}
export interface ISearchProps {
    data : ISearchMovieProps;
}
export interface ISearchMovieProps {
    genre_ids : number[];
    id : number;
    original_title : string;
    poster_path : string;
    release_date : string;
    title : string;
    vote_average : number;
}
export interface ISearchTitle {
    title : string;
    data : string | number[];
    genre : boolean;
}