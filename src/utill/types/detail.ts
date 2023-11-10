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