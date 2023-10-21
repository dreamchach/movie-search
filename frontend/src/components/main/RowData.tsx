import React from 'react'
import { IRowData } from '../../utill/type'
import { Link } from 'react-router-dom'
import { LinkTo, imgSrc } from '../../utill/function'
import Genres from '../Genres'
import { styled } from 'styled-components'

const RowData = ({item} : IRowData) => {
  return (
    <RowWrap>
        <Link to={LinkTo(item.id) as string}>
            <div>
                <SwiperImage
                    src={imgSrc(item.backdrop_path)}
                    alt={item.title}
                />
                <ImageFadeOut>
                    <SwiperTitle>{item.title}</SwiperTitle>
                    <div>
                        <SwiperDesc>
                            <Rate>
                                평점 <MovieRate>{item.vote_average.toFixed(1)}</MovieRate>
                            </Rate>
                            <Block> | </Block>
                            <MainGenres>
                                <Genres genreId={item.genre_ids}/>
                            </MainGenres>
                        </SwiperDesc>
                    </div>
                </ImageFadeOut>
            </div>
        </Link>
    </RowWrap>
  )
}

export default RowData

const RowWrap = styled.div`
width: 95%;
height: 95%;
padding-top: 56.25%;
border-radius: 10px;
box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
            rgb(0 0 0/73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  } 
`
const SwiperImage = styled.img`
inset: 0px;
display: block;
height: 100%;
object-fit: cover;
opacity: 1;
position: absolute;
width: 100%;
transition: opacity 500ms ease-in-out;
z-index:1;
`
const ImageFadeOut = styled.div`
background: linear-gradient(to top, black, transparent);
z-index: 2;
position: relative;
padding-top: 20px;
display: inline-block;
width: 100%;
`
const SwiperTitle = styled.h2`
z-index: 2;
position: relative;
left: 20px;
`
const SwiperDesc = styled.p`
z-index: 2;
position: relative;
left: 20px;
bottom: 10px;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const Rate = styled.span`
display: flex;
align-items: center;
`
const MovieRate = styled.span`
position: relative;
left: 10px;
font-size: 25px;
font-weight: 700;
`
const Block = styled.span`

`
const MainGenres = styled.span`

`