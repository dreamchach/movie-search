import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { styled } from 'styled-components'
import { bgSrc, overView, videoSrc } from '@/utill/functions/image'
import Link from 'next/link'
import { IBanner } from '@/utill/types/main'
import { LinkTo } from '@/utill/functions/link'

const getVideo = gql`
  query GetDetail($getDetailId: Int) {
    getDetail(id: $getDetailId) {
      videos {
        results {
          site
          key
          id
        }
      }
    }
  }
`

const Banner = ({movie} : IBanner) => {
  const {data, loading, error} = useQuery(getVideo, {
    variables : {
      getDetailId : movie.id
    }
  })
  const videoData = data?.getDetail?.videos?.results[0]

  return (
    <MainHeaderBanner>
      {videoData?.site === 'YouTube'
        ? (<MainIframe width='640' height='360' allow='autoplay; fullscreen' src={videoSrc(videoData?.key, videoData?.site, true)}></MainIframe>)
        : (<MainBannerImg $bg={bgSrc(movie.backdrop_path)}></MainBannerImg>)
      }
      <Link href={LinkTo(movie.id) as string}>
        <MainBannerBackground>
          <MainBannerContents>
            <MainBannerTitle>{movie.title}</MainBannerTitle>
            <MainBannerDescription>{overView(movie.overview as string, 100)}</MainBannerDescription>
          </MainBannerContents>
        </MainBannerBackground>
      </Link>
    </MainHeaderBanner>
  )
}

export default Banner

const MainHeaderBanner = styled.header`
  height: 448px;
  position: relative;
`
const MainIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border : none;
`
const MainBannerImg = styled.div<{$bg? : string}>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image : ${props => props.$bg}
`
const MainBannerBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
`
const MainBannerContents = styled.div`
  font-size: 10px;
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;
`
const MainBannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`
const MainBannerDescription = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  height: 880px;
`