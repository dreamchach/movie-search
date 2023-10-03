import { IModalMovie } from "../../types/main"

const modal = (modalOpen : string, movieSelected : string, id : string) => {
    let movie : IModalMovie = {
        backdrop_path : '',
        release_date : '',
        first_air_date : '',
        title : '',
        name : '',
        vote_average : 0,
        overview : ''
    }
    if(movieSelected !== '') {
        movie = JSON.parse(movieSelected)
    }
    if(modalOpen === id) return `
        <div class="modal-presentation">
            <div class="wrapper-modal">
                <div class="modal">
                    <span class="modal-close">
                        X
                    </span>
                    <img
                        class="modal-poster-img"
                        src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                        alt="modal-img"
                    />
                    <div class="modal-content">
                        <p class="modal-detail">
                            <span class="modal-user-perc">100% for you ${movie.release_date ? movie.release_date : movie.first_air_date}</span>
                        </p>
                        <h2 class="modal-title">${movie.title ? movie.title : movie.name}</h2>
                        <p class="modal-overview">평점 : ${movie.vote_average}</p>
                        <p class="modal-overview">${movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    `
    else return ``   
}

export default modal