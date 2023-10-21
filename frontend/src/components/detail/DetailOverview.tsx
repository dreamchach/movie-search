import React from 'react'
import { IDetailProps } from '../../utill/type'
import { gql, useQuery } from '@apollo/client'
import { styled } from 'styled-components'

const overViewApi = gql`
query Query($getDetailId: Int) {
  getDetail(id: $getDetailId) {
    tagline
    overview
  }
}
`

const DetailOverview = ({id} : IDetailProps) => {
  const {data, loading, error} = useQuery(overViewApi, {
      variables : {
        getDetailId : Number(id)
    }
  })
  const dataOverview = data?.getDetail

  if (dataOverview?.tagline === '' && dataOverview?.overview === '') {
    return <div></div>
  }

  return (
    <div>
      <TagOver>주요정보</TagOver>
      <OverviewContainer>
        <Tagline>
          {dataOverview?.tagline ? dataOverview?.tagline : ''}
        </Tagline>
        <OverviewSimple>
          {dataOverview?.overview}
        </OverviewSimple>
      </OverviewContainer>
    </div>
  )
}

export default DetailOverview

const TagOver = styled.h2`
padding-bottom: 30px;
border-bottom: 2px solid white;
display: inline-block;
`
const OverviewContainer = styled.div`
margin-top: 60px;
`
const Tagline = styled.div`
font-weight: 700;
line-height: 25px;
`
const OverviewSimple = styled.div`
line-height: 25px;
`