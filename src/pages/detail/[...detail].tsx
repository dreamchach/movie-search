import DetailCollect from '@/components/detail/DetailCollect'
import DetailInfo from '@/components/detail/DetailInfo'
import DetailVideos from '@/components/detail/DetailVideos'
import DetailOverview from '@/components/detail/DetailOverview'
import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  const id = router.asPath.substring(8)
  const {data, loading, error} = useQuery(collectApi, {
    variables : {
      getDetailId : Number(id)
    }
  })
  useEffect(() => {
    if(isNaN(Number(id))) router.push('/404')
  }, [])

  return (
    <DetailContainer>
        <DetailInfo id={id} />
        <DetailOverview id={id} />
        <DetailVideos id={id} />
        <DetailCollect id={id} collectId={data?.getDetail?.belongs_to_collection?.id} />
    </DetailContainer>
  )
}

export default Detail

const DetailContainer = styled.section`
  margin: 90px 10px;
`