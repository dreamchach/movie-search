import ImageDisney from '../../public/images/viewers-disney.png'
import ImageMarvel from '../../public/images/viewers-marvel.png'
import ImagePixar from '../../public/images/viewers-pixar.png'
import ImageStarwars from '../../public/images/viewers-starwars.png'
import ImageNational from '../../public/images/viewers-national.png'
import VideoDisney from '../../public/videos/disney.mp4'
import VideoMarvel from '../../public/videos/marvel.mp4'
import VideoPixar from '../../public/videos/pixar.mp4'
import VideoStarwars from '../../public/videos/star-wars.mp4'
import VideoNational from '../../public/videos/national-geographic.mp4'
import requests from "../../axios/request"

export const categoryLists = [
    {image : ImageDisney , alt : 'disney', video : VideoDisney},
    {image : ImageMarvel , alt : 'marvel', video : VideoMarvel},
    {image : ImagePixar , alt : 'pixar', video : VideoPixar},
    {image : ImageStarwars , alt : 'starwars', video : VideoStarwars},
    {image : ImageNational , alt : 'national', video : VideoNational}
]

export const rowLists = [
    {title : 'Now Playing', id : 'NP', fetchUrl : requests.fetchNowPlaying},
    {title : 'Popular Movies', id : 'PM', fetchUrl : requests.fetchPopular},
    {title : 'Top Rated', id : 'TR', fetchUrl : requests.fetchTopRated},
    {title : 'Upcoming Movies', id : 'UM', fetchUrl : requests.fetchUpcoming},
]