import instance from "../../axios/instance"
import { IGenres, IRowMovie } from "../../types/main"

const row = async (row : any, num : number) => {
    const item = await row
    const genres = await instance.get('/genre/movie/list')
        .then((res) => {return res.data.genres})

const contentsRes = item.fetchUrl.map((i : IRowMovie) => {
    const genreMatch = (genresID : number[]) => {
        let res : string[] = []
        genresID.map((item) => {
            genres.map((i : IGenres) => {
                if(i.id === item) res.push(i.name)
            })
        })
        return res
    }
        return `
            <div class="swiper-slide">
                <div class="row-wrap">
                    <a href='/detail#${i.id}'>
                        <div class='movie-main'>
                            <img
                                src="https://image.tmdb.org/t/p/original${i.backdrop_path}"
                                alt="${i.title}"
                                class='swiper-img'
                                data-backdrop_path = '${i.backdrop_path}'
                                data-release_date = '${i.release_date}'
                                data-title = '${i.title}'
                                data-vote_average = '${i.vote_average}'
                                data-overview = '${i.overview}'
                            />
                            <div class='image-fade-out'>
                                <h2>${i.title}</h2>
                                <div>
                                    <p>
                                        <span class='rate'>
                                            평점 <span class='movie-rate'>${i.vote_average?.toFixed(1)}</span>
                                        </span>
                                        <span class='block'> | </span>
                                        <span class='genres'><span class='movie-genres'>${genreMatch(i.genre_ids)}</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `
    }).join('')

    return `
        <div id="row-container-${num}" class='row-container'>
            <h2>${item.title}</h2>
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${contentsRes}
                </div>
                <div class='swiper-pagination'></div>
                <div class='swiper-button-prev'></div>
                <div class='swiper-button-next'></div>
                <div class='swiper-scrollbar'></div>
            </div>
        </div>
    `
}

export default row          