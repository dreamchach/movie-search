import instance from "../../axios/instance"
import NoImage from '../../public/images/no-movie.png'
import { IGenres } from "../../types/main"

const getHtml = async (searchPage : number) => {
    let movie : any[] = []

    let totalPage = 1
    const search = location.search.substring(1)
    const fetchSearchMovie = async (search : string) => {
        try {
            const response = await instance.get(`/search/movie?&query=${search}&page=${searchPage}`)
            movie = response.data.results
            totalPage = response.data.total_pages
        } catch (error) {
            console.log(error)
            movie = []
        }
    }
    await fetchSearchMovie(search)
    
    const genres = await instance.get('/genre/movie/list')
    .then((res) => {return res.data.genres})

    const searchMovie = movie.map((item) => {
        const genreMatch = (genresID : number[]) => {
            let res : string[] = []
            genresID.map((item) => {
                genres.map((i : IGenres) => {
                    if(i.id === item) res.push(i.name)
                })
            })
            return res.join(',  ')
        }

        if(/[가-힣]+/.test(item.name || item.title)) {
        const movieImage = item.backdrop_path ? `https://image.tmdb.org/t/p/w200` + item.poster_path : NoImage
        
        return `
            <div class="search-movie">
                <div class="search-movie-column-poster">
                    <a href='/detail#${item.id}'>
                        <div class='poster'>
                            <img src="${movieImage}" alt="movie" class="search-movie-poster" />
                        </div>
                        <div class='movie-info'>
                            <div class='movie-title'>${item.title}</div>
                            <div class='movie-original-title'>${item.original_title}</div>
                            <div class='movie-simple-info'>
                                <div>
                                    <span class='sub-title'>제작</span>
                                    <span class='sub-value'>${item.release_date.split('-')[0]}</span>
                                </div>
                                <div>
                                    <span class='sub-title'>장르</span>
                                    <span class='sub-value'>${genreMatch(item.genre_ids)}</span>
                                </div>
                                <div>
                                    <span class='sub-title'>평점</span>
                                    <span class='sub-value'>${item.vote_average.toFixed(1)}</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `
        }
    }).join('')

    const pageNavi = (page : number, totalPage : number) => {
        if(page <= 1 && totalPage > 1) {
            return `
                <div id='pages'>
                    <button class='next-page page-button'>NEXT PAGE</button>
                </div>
            `
        }else if(page > 1 && page === totalPage) {
            return `
                <div id='pages'>
                    <button class='prev-page page-button'>PREV PAGE</button>
                </div>
            `
        }else return `
            <div id='pages'>
                <button class='prev-page page-button'>PREV PAGE</button>
                <button class='next-page page-button'>NEXT PAGE</button>
            </div>
        `
    }
    
    if(movie.length > 0) {
        return `
            <section class="search-container">
                ${searchMovie}
                ${pageNavi(searchPage, totalPage)}
            </section>
        `
    } else {
        return `
            <section class="search-no-results">
                <div class="no-results-text">
                    <p>
                        찾고자하는 검색어 "${search}"에 맞는 영화가 없습니다
                    </p>
                </div>
            </section>
        ` 
    }
}

export default getHtml