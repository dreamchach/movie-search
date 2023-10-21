import React from 'react'
import { IDetailProps, IGenreData } from '../../utill/type'
import { gql, useQuery } from '@apollo/client'
import { imgSrc } from '../../utill/function'
import DetailInfoTitle from './DetailInfoTitle'
import { styled } from 'styled-components'

const getDetailMovie = gql`
query GetDetail($getDetailId: Int) {
  getDetail(id: $getDetailId) {
    poster_path
    title
    original_title
    release_date
    genres {
      name
    }
    production_countries {
      name
    }
    runtime
    vote_average
  }
}
`

const DetailInfo = ({id} : IDetailProps) => {
    const {data, loading, error} = useQuery(getDetailMovie, {
        variables : {
            getDetailId : Number(id)
        }
    })
    const detailData = data?.getDetail

  return (
    <MoviePosterInfo>
        <div>
            <DetailPosterImg src={imgSrc(detailData?.poster_path)}
                alt={detailData?.title}
            />
        </div>
        <DetailMovieInfo>
            <DetailMovieTitle>
                <DetailTitle>{detailData?.title}</DetailTitle>
                <div>{detailData?.original_title === detailData?.title ? '' : detailData?.original_title}, {detailData?.release_date?.split('-')[0]}</div>
            </DetailMovieTitle>
            <DetailMovieFullInfo>
                <div>
                    <DetailInfoTitle title='개봉' data={detailData?.release_date?.split('-').join('.')} />
                    <DetailInfoTitle title='장르' data={detailData?.genres?.map((item : IGenreData) => item.name).join(', ')} />
                    <DetailInfoTitle title='국가' data={detailData?.production_countries?.length > 0 && detailData?.production_countries?.map((item : IGenreData) => item.name).join(', ')} />
                    <DetailInfoTitle title='러닝타임' data={detailData?.runtime + '분'} />
                </div>
                <div>
                    <div>
                        <DetailSubTitle>평점</DetailSubTitle>
                        <DetailRedStar>★</DetailRedStar>
                        {detailData?.vote_average?.toFixed(1)}
                    </div>
                </div>
            </DetailMovieFullInfo>
        </DetailMovieInfo>
    </MoviePosterInfo>
  )
}

export default DetailInfo

const MoviePosterInfo = styled.div`
display: flex;
align-items: center;
margin-bottom: 90px;
position: relative;
`
const DetailPosterImg = styled.img`
border-radius: 10px;
width: 250px;
height: 355px;
`
const DetailMovieInfo = styled.div`
margin-left: 30px;
min-width: 460px;
`
const DetailMovieTitle = styled.div`
position: absolute;
min-width: 460px;
top: 0;
`
const DetailTitle = styled.h2`
font-size: 30px;
font-weight: 700;
margin-bottom: 10px;
`
const DetailMovieFullInfo = styled.div`
display: flex;
gap: 80px;
`
const DetailSubTitle = styled.div`
color: rgb(200, 200, 200);
font-weight: 700;
width: 60px;
display: inline-block;
`
const DetailRedStar = styled.span`
color: red;
`
