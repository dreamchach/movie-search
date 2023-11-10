import { collect, detail, genreData, get, search } from "@/utill/functions/graphql"
import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import gql from 'graphql-tag'
import type { IGraphqlSearch, IGraphqlId } from '@/utill/types/graphql'
import { requests } from "@/utill/axios/request"


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

const resolvers = {
  Query : {
    playMovie : () => {
        const res = get(requests.fetchNowPlaying)
        return res
    },
    popularMovie : () => {
        const res = get(requests.fetchPopular)
        return res
    },
    topRateMovie : () => {
        const res = get(requests.fetchTopRated)
        return res
    },
    upcomingMovie : () => {
        const res = get(requests.fetchUpcoming)
        return res
    },
    getGenres : () => {
        const res = genreData()
        return res
    },
    getSearch : (root : any, {keyword, page} : IGraphqlSearch) => {
        const res = search(keyword, page)
        return res
    },
    getDetail : (root : any, {id} : IGraphqlId) => {
        const res = detail(id)
        return res
    },
    getCollect : (root : any, {id} : IGraphqlId) => {
        const res = collect(id)
        return res
    },
  }
}

const server = new ApolloServer({typeDefs, resolvers})

export default startServerAndCreateNextHandler(server)