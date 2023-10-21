import { gql, useQuery } from '@apollo/client'
import Banner from '../components/main/Banner'
import Row from '../components/main/Row'
import Layout from '../components/Layout'
import { styled } from 'styled-components'
import NowPlay from '../components/main/NowPlay'

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
    return (
      <div>
        <Layout />
        <MainContainer></MainContainer>
      </div>
    )
  }
  if(error) {
    return (
      <div>
        <Layout />
        <MainContainer>
          Now could not fetch :(
        </MainContainer>
      </div>
    )
  }
  return (
    <div>
      <Layout />
      <MainContainer>
        <Banner movie={data.playMovie[Math.floor(Math.random() * data.playMovie.length)]}/>
        <Rows>
          <NowPlay movieData={data.playMovie}/>
          <Row movies='popularMovie'/>
          <Row movies='topRateMovie'/>
          <Row movies='upcomingMovie'/>
        </Rows>
      </MainContainer>
    </div>
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