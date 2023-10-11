import { IRowMovie } from "../../types/main"

const modal = (modalOpen : string, movieSelected : IRowMovie, id : string) => {
    if(modalOpen === id) return `
        <div class="modal-presentation">
            <div class="wrapper-modal">
                <div class="modal">
                    <span class="modal-close">
                        X
                    </span>
                    <img
                        class="modal-poster-img"
                        src="https://image.tmdb.org/t/p/original/${movieSelected.backdrop_path}"
                        alt="modal-img"
                    />
                    <div class="modal-content">
                        <p class="modal-detail">
                            <span class="modal-user-perc">100% for you ${movieSelected.release_date ? movieSelected.release_date : movieSelected.first_air_date}</span>
                        </p>
                        <h2 class="modal-title">${movieSelected.title ? movieSelected.title : movieSelected.name}</h2>
                        <p class="modal-overview">평점 : ${movieSelected.vote_average}</p>
                        <p class="modal-overview">${movieSelected.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    `
    else return ``   
}

export default modal