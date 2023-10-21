import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { IGenreData, IGenres } from '../utill/type'
import { styled } from 'styled-components'

const getGenres = gql`
query UpcomingMovie {
    getGenres {
      name
      id
    }
}
`

const Genres = ({genreId} : IGenres) => {
    const {data, loading, error} = useQuery(getGenres)
    const array = genreId.map((item) => {
        if(data) {
            const arr = data.getGenres.find((i : IGenreData) => i.id === item)
            return arr
        }  
    })
  return (
    <MovieGenres>{data && array.map((item) => item.name).join(', ')}</MovieGenres>
  )
}

export default Genres

const MovieGenres = styled.span`

`