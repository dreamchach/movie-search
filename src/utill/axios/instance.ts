import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params : {
        api_key : process.env.NEXT_PUBLIC_TMDB_APIKEY,
        language : 'ko-KR'
    }
})

export default instance