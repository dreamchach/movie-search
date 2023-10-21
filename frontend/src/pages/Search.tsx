import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useLocation } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import { styled } from 'styled-components'
import SearchMovieData from '../components/search/SearchMovieData'
import { ISearchMovieProps } from '../utill/type'
import PageNavi from '../components/search/PageNavi'

const searchMovie = gql`
  query GetSearch($keyword: String, $page: Int) {
    getSearch(keyword: $keyword, page: $page) {
      total_pages
      results {
        poster_path
        title
        original_title
        genre_ids
        vote_average
        release_date
        id
      }
    }
  }
`

const Search = () => {
  const location = useLocation()
  const [page, setPage] = useState(1)
  const search = decodeURI(location.pathname).substring(8)
  const {data, loading, error} = useQuery(searchMovie, {
    variables : {
      keyword : search,
      page : page
    }
  })
  const totalPage = data?.getSearch?.total_pages
  const movieData = data?.getSearch?.results

  if(movieData?.length === 0) return (
    <div>
      <Layout />
      <SearchNoResults>
        <div>
          <p>
            찾고자하는 검색어 "{search}"에 맞는 영화가 없습니다
          </p>
        </div>
      </SearchNoResults>
    </div>
  )
  return (
    <div>
      <Layout />
      <SearchContainer>
        {movieData?.map((item : ISearchMovieProps) => (
          <SearchMovie key={item.id}>
            <SearchMovieData data={item}/>
          </SearchMovie>
        ))}
        <PageNavi page={page} total={totalPage} setPage={setPage}/>
      </SearchContainer>
    </div>
  )
}

export default Search

const SearchNoResults = styled.section`
display: flex;
justify-content: center;
align-content: center;
color: #c5c5c5;
height: 100%;
padding: 8rem;
`
const SearchContainer = styled.section`
background-color: black;
width: 100%;
text-align: center;
padding: 5rem 0;
`
const SearchMovie = styled.div`
flex: 1 1 auto;
display: inline-block;
padding: 30px 0;
`