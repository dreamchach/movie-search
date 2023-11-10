import React from 'react'
import { styled } from 'styled-components'
import SearchMovieData from '@/components/search/SearchMovieData'
import PageNavi from '@/components/search/PageNavi'
import { useRouter } from 'next/router'
import { ISearchMovieProps } from '@/utill/types/search'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

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
  const location = useRouter()
  const search = location.query.value
  const page = location.query.page
  const {data, loading, error} = useQuery(searchMovie, {
    variables : {
      keyword : search,
      page : Number(page)
    }
  })
  
  const totalPage = data?.getSearch?.total_pages
  const movieData = data?.getSearch?.results

  if(movieData?.length === 0) return (
      <SearchNoResults>
        <div>
          <p>
            찾고자하는 검색어 &quot;{search}&quot;에 맞는 영화가 없습니다
          </p>
        </div>
      </SearchNoResults>
  )

  return (
      <SearchContainer>
        {movieData?.map((item : ISearchMovieProps) => (
          <SearchMovie key={item.id}>
            <SearchMovieData data={item}/>
          </SearchMovie>
        ))}
        <PageNavi page={page} total={totalPage} value={search}/>
      </SearchContainer>
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