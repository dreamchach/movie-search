import requests from "../../axios/request"
//import '../../public/_redirects'

export const rowLists = [
    {title : 'Now Playing', id : 'NP', fetchUrl : requests.fetchNowPlaying},
    {title : 'Popular Movies', id : 'PM', fetchUrl : requests.fetchPopular},
    {title : 'Top Rated', id : 'TR', fetchUrl : requests.fetchTopRated},
    {title : 'Upcoming Movies', id : 'UM', fetchUrl : requests.fetchUpcoming},
]