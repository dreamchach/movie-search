import React from 'react'
import { ISearchTitle } from '../../utill/type'
import Genres from '../Genres'
import { styled } from 'styled-components'

const SearchInfoTitle = ({title, data, genre} : ISearchTitle) => {
    
    return (
        <div>
            <SubTitle>{title}</SubTitle>
            {genre ? 
                <Genres genreId={data as number[]} />
                : <span>{data}</span>
            }
        </div>
    )
}

export default SearchInfoTitle

const SubTitle = styled.span`
font-weight: 700;
color: rgb(150, 150, 150);
margin-right : 10px;
`