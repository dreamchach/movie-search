import React from 'react'
import { INowPlayRow } from '@/utill/types/main';
import { styled } from 'styled-components';
import RowData from './RowData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NowPlay = ({movieData} : INowPlayRow) => {
  return (
    <RowContainer>
        <RowTitle>PLAYMOVIE</RowTitle>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                1378 : {
                    slidesPerView : 4,
                    slidesPerGroup : 4
                },
                998 : {
                    slidesPerView : 3,
                    slidesPerGroup : 3
                },
                625 : {
                    slidesPerView : 2,
                    slidesPerGroup : 2
                },
                0 : {
                    slidesPerView : 1,
                    slidesPerGroup : 1
                }
            }}
        >
            {movieData.map((item) => (
                <SwiperSlide key={item.id}>
                    <RowData item={item}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </RowContainer>
  )
}

export default NowPlay

const RowContainer = styled.div`
    padding-bottom: 26px;
`
const RowTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 20px;
`