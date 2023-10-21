const { default: axios } = require("axios");
const dotenv = require("dotenv");

dotenv.config()

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params : {
        api_key : process.env.TMDB_APIKEY,
        language : 'ko-KR'
    }
})

module.exports = instance