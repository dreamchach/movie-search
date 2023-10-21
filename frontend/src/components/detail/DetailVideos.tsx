import React, { useEffect, useState } from 'react'
import { IDetailProps, IVideos } from '../../utill/type'
import { gql, useQuery } from '@apollo/client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { videoSrc } from '../../utill/function';
import { styled } from 'styled-components';

const videos = gql`
    query Query($getDetailId: Int) {
        getDetail(id: $getDetailId) {
          videos {
            results {
              site
              name
              published_at
              key
              id
            }
          }
        }
      }
    `

const DetailVideos = ({id} : IDetailProps) => {
    const {data, loading, error} = useQuery(videos, {
        variables : {
            getDetailId : Number(id)
        }
    })
    const videoArray = data?.getDetail?.videos?.results
    const [playVideoKey, setPlayVideoKey] = useState({key : '', site : ''})
    const [autoplay, setAutoplay] = useState(false)
    useEffect(() => {
        if(data) setPlayVideoKey(videoArray[0])
    }, [data])
    const publish = (date : string) => {
        const first = date?.split('T')[0]
        const second = first?.split('-').join('.')
        return second
    }
    const onclick = (item : IVideos) => {
        setAutoplay(true)
        setPlayVideoKey(item)
    }
    
    if(videoArray?.length === 0) {
        return <div></div>
    }

  return (
    <div>
    <TagOver>영상</TagOver>
    <OverviewContainer>
        <IframeContainer>
        <iframe 
            width='640' 
            height='360' 
            src={videoSrc(playVideoKey?.key, playVideoKey?.site, autoplay)}
        ></iframe>
        </IframeContainer>
        <SwiperContainer>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    1670 : {
                        slidesPerView : 4,
                        slidesPerGroup : 4
                    },
                    1300 : {
                        slidesPerView : 3,
                        slidesPerGroup : 3
                    },
                    1000 : {
                        slidesPerView : 2,
                        slidesPerGroup : 2
                    },
                    0 : {
                        slidesPerView : 1,
                        slidesPerGroup : 1
                    }
                }}
            >
                {videoArray?.map((item : IVideos) => (
                    <SwiperSlide key={item.id}>
                        <SlideWrap onClick={() => onclick(item)}>
                            <iframe 
                                width='400'
                                height='222' 
                                src={videoSrc(item.key, item.site, false)}
                            ></iframe>
                            <Cover></Cover>
                            <Title>{item.name}</Title>
                            <Publish>{publish(item.published_at)}</Publish>                        
                        </SlideWrap>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperContainer>        
    </OverviewContainer>
  </div>
  )
}

export default DetailVideos

const TagOver = styled.h2`
padding-bottom: 30px;
border-bottom: 2px solid white;
display: inline-block;
`
const OverviewContainer = styled.div`
margin-top: 60px;
`
const IframeContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 100px;
`
const SlideWrap = styled.div`
width: 95%;
height: 95%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const SwiperContainer = styled.div`
    margin: 0 20px;
`
const Cover = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
`
const Title = styled.div`
margin-top: 20px;
font-weight: 700;
`
const Publish = styled.div`
margin-top: 5px;
font-size: 14px;
color: rgba(200, 200, 200);
`