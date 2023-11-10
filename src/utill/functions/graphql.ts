import instance from "../axios/instance"
import { requests } from "../axios/request"

export const get = async (request : string) => {
    try {
        const res = await instance.get(request)
        return res.data.results
    } catch (error) {
        console.log(error)
    }
}
export const genreData = async () => {
    try {
        const res = await instance.get(requests.fetchGenres)
        return res.data.genres
    } catch (error) {
        console.log(error)
    }
}
export const search = async (keyword : string, page : number) => {
    try {
        const res = await instance.get(`/search/movie?query=${keyword}&page=${page}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const detail = async (id : number) => {
    try {
        const res = await instance.get(`/movie/${id}`, {
            params : {append_to_response : 'videos'}
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const collect = async (id : number) => {
    try {
        const res = await instance.get(`/collection/${id}`)
        return res.data
    } catch (error) {
        console.log('error')
    }
}