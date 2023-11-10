import { IVideos } from '../types/detail'

export const onclick = (item : IVideos, setAutoplay: any, setPlayVideoKey : any) => {
    setAutoplay(true)
    setPlayVideoKey(item)
}