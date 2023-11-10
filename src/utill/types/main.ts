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
export interface IRowData {
    item : IMainMovie;
}
export interface IRow {
    movies : string;
}