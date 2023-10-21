const { gql, ApolloServer } = require("apollo-server")
const instance = require("./axios/instance")
const requests = require("./axios/request")

const typeDefs = gql`
    type Query {
        playMovie : [mainMovies]
        popularMovie : [mainMovies]
        topRateMovie : [mainMovies]
        upcomingMovie : [mainMovies]
        getGenres : [genres]
        getSearch (keyword : String, page : Int) : searchs
        getDetail (id : Int) : details
        getCollect (id : Int) : collect
    }
    type mainMovies {
        adult : Boolean
        backdrop_path : String
        genre_ids : [Int]
        id : Int
        original_title : String
        overview : String
        poster_path : String
        release_date : String
        title : String
        vote_average : Float
    }
    type genres {
        id : Int
        name : String
    }
    type searchs {
        page : Int
        results : [mainMovies]
        total_pages : Int
        total_results : Int
    }
    type details {
        adult : Boolean
        backdrop_path : String
        belongs_to_collection : collection
        genres : [genres]
        id : Int
        original_title : String
        overview : String
        poster_path : String
        production_countries : [country]
        release_date : String
        runtime : String
        tagline : String
        title : String
        vote_average : Float
        videos : videos
    }
    type collection {
        id : Int
        name : String
    }
    type country {
        name : String
    }
    type videos {
        results : [video]
    }
    type video {
        key : String
        name : String
        id : String
        published_at : String
        site : String
    }
    type collect {
        id : Int
        name : String
        parts : [mainMovies]
    }
`

const get = async (request) => {
    try {
        const res = await instance.get(request)
        return res.data.results
    } catch (error) {
        console.log(error)
    }
}
const genreData = async () => {
    try {
        const res = await instance.get(requests.fetchGenres)
        console.log(res.data.genres)
        return res.data.genres
    } catch (error) {
        console.log(error)
    }
}
const search = async (keyword, page) => {
    try {
        const res = await instance.get(`/search/movie?query=${keyword}&page=${page}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
const detail = async (id) => {
    try {
        const res = await instance.get(`/movie/${id}`, {
            params : {append_to_response : 'videos'}
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
const collect = async (id) => {
    try {
        const res = await instance.get(`/collection/${id}`)
        return res.data
    } catch (error) {
        console.log('error')
    }
}

const resolvers = {
    Query : {
        playMovie() {
            const res = get(requests.fetchNowPlaying)
            return res
        },
        popularMovie() {
            const res = get(requests.fetchPopular)
            return res
        },
        topRateMovie() {
            const res = get(requests.fetchTopRated)
            return res
        },
        upcomingMovie() {
            const res = get(requests.fetchUpcoming)
            return res
        },
        getGenres() {
            const res = genreData()
            return res
        },
        getSearch(root, {keyword, page}) {
            const res = search(keyword, page)
            return res
        },
        getDetail(root, {id}) {
            const res = detail(id)
            return res
        },
        getCollect(root, {id}) {
            const res = collect(id)
            return res
        },
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`running on ${url}`)
})
