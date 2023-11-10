import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { styled } from 'styled-components'
import Banner from '@/components/main/Banner'
import NowPlay from '@/components/main/NowPlay'
import Row from '@/components/main/Row'

const Main = () => {
  const MainMovies = gql`
  query playMovie {
    playMovie {
      vote_average
      title
      id
      genre_ids
      backdrop_path
    }
  }
  `
  const {data, loading, error} = useQuery(MainMovies)

  if(loading) {
    return <MainContainer></MainContainer>
  }
  if(error) {
    return <MainContainer>Now could not fetch :(</MainContainer>
  }
  return (
    <MainContainer>
        <Banner movie={data.playMovie[Math.floor(Math.random() * data.playMovie.length)]}/>
        <Rows>
          <NowPlay movieData={data.playMovie}/>
          <Row movies='popularMovie'/>
          <Row movies='topRateMovie'/>
          <Row movies='upcomingMovie'/>
        </Rows>
    </MainContainer>
  )

}

export default Main

const MainContainer = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after{
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -2;
    background-image: url('/images/home-background.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
`
const Rows = styled.div`
margin-top: 25px;
`