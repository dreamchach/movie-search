import React from 'react'
import { styled } from 'styled-components'
import { LinkTo } from '@/utill/functions/link'
import { imgSrc } from '@/utill/functions/image'
import Link from 'next/link'
import { ISearchProps } from '@/utill/types/search'
import SearchInfoTitle from './SearchInfoTitle'

const SearchMovieData = (props : ISearchProps) => {
    const data = props.data

  return (
    <SearchMovieColumnPoster>
        <Link href={LinkTo(data.id) as string}>
            <Flex>
                <div>
                    <SearchMoviePoster src={imgSrc(data.poster_path)} alt={data.title} />
                </div>
                <MovieInfo>
                    <MovieTitle>{data.title}</MovieTitle>
                    <MovieOriginalTitle>{data.original_title}</MovieOriginalTitle>
                    <MovieSimpleInfo>
                        <SearchInfoTitle 
                            title='제작' 
                            data={data.release_date.split('-')[0]} 
                            genre={false}
                        />
                        <SearchInfoTitle 
                            title='장르' 
                            data={data.genre_ids} 
                            genre={true}
                        />
                        <SearchInfoTitle 
                            title='평점' 
                            data={data.vote_average.toFixed(1)} 
                            genre={false}
                        />
                    </MovieSimpleInfo>
                </MovieInfo>
            </Flex>
        </Link>
    </SearchMovieColumnPoster>
  )
}

export default SearchMovieData

const SearchMovieColumnPoster = styled.div`
cursor: pointer;
transition: transform 0.3s;
-webkit-transition: transform 0.3s;
display: flex;
box-sizing: border-box;
border-radius: 10px;

&:hover {
    background-color: rgb(50, 50, 50);
    transform: scale(0.97);
}
`
const Flex = styled.div`
display: flex;
`
const SearchMoviePoster = styled.img`
width: 125px;
border-radius: 5px;
height: 187.5px;
border-radius: 10px;
`
const MovieInfo = styled.div`
width: calc(100vw - 155px);
align-items: flex-start;
justify-content: flex-start;
position: relative;
left: 20px;
display: flex;
flex-direction: column;
top: 20px;
`
const MovieTitle = styled.div`
display: flex;
font-size: 18px;
font-weight: 700;
padding-bottom: 5px;
`
const MovieOriginalTitle = styled.div`
font-size: 15px;
padding-bottom: 25px;
color: rgb(200, 200, 200);
`
const MovieSimpleInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`