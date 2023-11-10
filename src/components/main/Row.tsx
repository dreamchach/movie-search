import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styled } from 'styled-components';
import RowData from './RowData';
import { IMainMovie, IRow } from '@/utill/types/main';

const Row = ({movies} : IRow) => {
  const rowMovie = gql`
  query ${movies} {
    ${movies} {
      vote_average
      title
      id
      genre_ids
      backdrop_path
    }
  }
  `
  const {data, loading, error} = useQuery(rowMovie)

return (
    <RowContainer>
      <RowTitle>{movies.toUpperCase()}</RowTitle>
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
        {data && data[movies].map((item : IMainMovie) => (
          <SwiperSlide key={String(item.id)}>
            <RowData item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
</RowContainer>
  )
}

export default Row

const RowContainer = styled.div`
    padding-bottom: 26px;
`
const RowTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 20px;
`