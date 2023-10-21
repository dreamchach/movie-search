import React from 'react'
import { ICollect, ICollectProps } from '../../utill/type'
import { gql, useQuery } from '@apollo/client'
import { LinkTo, imgSrc } from '../../utill/function'
import DetailInfoTitle from './DetailInfoTitle'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const collectMovieApi = gql`
query GetCollect($getCollectId: Int) {
  getCollect(id: $getCollectId) {
    name
    id
    parts {
      title
      poster_path
      release_date
      id
    }
  }
}
`

const DetailCollect = ({id, collectId} : ICollect) => {
  const {data, loading, error} = useQuery(collectMovieApi, {
    variables : {
      getCollectId : Number(collectId)
    }
  })
  const collectData = data?.getCollect?.parts?.filter((item : ICollectProps) => item.id !== Number(id))

  if(collectData === undefined) {
    return <div></div>
  }

  if(error) {
    return (
      <div>
        It's error
      </div>
    )
  }


  return (
    <div>
      <TagOver>
        <span>시리즈</span>
        <Length>{collectData?.length}</Length>
      </TagOver>
      <OverviewContainer>
        {collectData?.map((item : ICollectProps) => (
          <Link to={LinkTo(item.id) as string} key={item.id}>
            <Flex>
              <div>
                <DetailPosterImg src={imgSrc(item.poster_path)} alt={item.title} />
              </div>
              <div>
                <div>
                  <h1>{item.title}</h1>
                </div>
                <div>
                  <DetailInfoTitle title='개봉' data={item.release_date.split('-').join('.')} />
                </div>
              </div>
            </Flex>
          </Link>
        ))}
      </OverviewContainer>
    </div>
  )
}

export default DetailCollect

const TagOver = styled.h2`
padding-bottom: 30px;
border-bottom: 2px solid white;
display: inline-block;
`
const OverviewContainer = styled.div`
margin-top: 60px;
display: flex;
flex-wrap: wrap;
gap: 50px;
`
const Length = styled.span`
padding-left: 10px;
color: rgb(200, 200, 200);
`
const DetailPosterImg = styled.img`
border-radius: 10px;
width: 250px;
height: auto;
transition : 25ms;
&:hover {
  transfrom: scale(0.98);
  border : 3px solid white;
}
`
const Flex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width : 400px;

`