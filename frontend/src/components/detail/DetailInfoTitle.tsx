import React from 'react'
import { IDetailTitle } from '../../utill/type'
import { styled } from 'styled-components'

const DetailInfoTitle = ({title, data} : IDetailTitle) => {
  return (
    <DetailInfoContainer>
        <DetailSubTtitle>{title}</DetailSubTtitle>
        {data}
    </DetailInfoContainer>
  )
}

export default DetailInfoTitle

const DetailInfoContainer = styled.div`
padding-bottom: 10px;
`
const DetailSubTtitle = styled.span`
color: rgb(200, 200, 200);
font-weight: 700;
width: 60px;
display: inline-block;
`