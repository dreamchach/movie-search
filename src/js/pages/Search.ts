import instance from "../../axios/instance"

const getHtml = async () => {
    let movie : any[] = []
    const search = location.search.substring(1)
    const fetchSearchMovie = async (search : string) => {
        try {
            const response = await instance.get(`/search/multi?include_adult=false&query=${search}`)
            movie = response.data.results
        } catch (error) {
            console.log(error)
            movie = []
        }
    }
    await fetchSearchMovie(search)

    const searchMovie = movie.map((item) => {
        if(item.backdrop_path !== null && item.media_type !== 'person') {
            const movieImage = `https://image.tmdb.org/t/p/w500` + item.backdrop_path
            return `
                <div class="search-movie">
                    <div class="search-movie-column-poster">
                        <a href='/detail#${item.id}'>
                            <img src="${movieImage}" alt="movie" class="search-movie-poster" />
                        </a>
                    </div>
                </div>
            `
        }
    })
    
    if(movie.length > 0) {
        return `
            <section class="search-container">
                ${searchMovie}
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