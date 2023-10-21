import React from 'react'
import { useLocation } from 'react-router-dom'
import DetailInfo from '../components/detail/DetailInfo'
import DetailOverview from '../components/detail/DetailOverview'
import DetailCollect from '../components/detail/DetailCollect'
import { styled } from 'styled-components'
import Layout from '../components/Layout'
import DetailVideos from '../components/detail/DetailVideos'
import { gql, useQuery } from '@apollo/client'
import NotFound from './NotFound'

const collectApi = gql`
query GetDetail($getDetailId: Int) {
  getDetail(id: $getDetailId) {
    belongs_to_collection {
      name
      id
    }
  }
}
`

const Detail = () => {
  const location = useLocation()
  const id = location.pathname.substring(8)
  const {data, loading, error} = useQuery(collectApi, {
    variables : {
      getDetailId : Number(id)
    }
  })

  if(isNaN(Number(id))) {
    return (
      <NotFound />
    )
  }

  return (
    <div>
      <Layout />
      <DetailContainer>
        <DetailInfo id={id} />
        <DetailOverview id={id} />
        <DetailVideos id={id} />
        <DetailCollect id={id} collectId={data?.getDetail?.belongs_to_collection?.id} />
      </DetailContainer>
    </div>
  )
}

export default Detail

const DetailContainer = styled.section`
  margin: 90px 10px;
`