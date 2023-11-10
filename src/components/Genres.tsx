import React from 'react'
import { styled } from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { IGenreData, IGenres } from '@/utill/types/genre'

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
    <span>{data && array.map((item) => item.name).join(', ')}</span>
  )
}

export default Genres