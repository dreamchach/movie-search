export interface ISearchMovieProps {
    genre_ids : number[];
    id : number;
    original_title : string;
    poster_path : string;
    release_date : string;
    title : string;
    vote_average : number;
}
export interface ISearchProps {
    data : ISearchMovieProps;
}
export interface ISearchTitle {
    title : string;
    data : string | number[];
    genre : boolean;
}