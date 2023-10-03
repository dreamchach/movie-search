import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params : {
        api_key : process.env.TMDB_APIKEY,
        language : 'ko-KR'
    }
})

export default instance