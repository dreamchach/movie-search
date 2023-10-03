import { IRowMovie } from "../../types/main"
import modal from "./modal"

const row = async (row : any, num : number, modalOpen : string, movieSelected : string) => {
    const item = await row
    const swiperContent = item.fetchUrl.map((i : IRowMovie) => {
        return `
            <div class="swiper-slide">
                <div class="row-wrap">
                    <img
                        src="https://image.tmdb.org/t/p/original${i.backdrop_path}"
                        alt="${i.name || i.title}"
                        class='swiper-img'
                        id='${JSON.stringify(i)}'
                    />
                </div>
            </div>
        `
    }).join('')

    return `
        <div id="row-container-${num}" class='row-container'>
            <h2>${item.title}</h2>
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${swiperContent}
                </div>
                <div class='swiper-pagination'></div>
                <div class='swiper-button-prev'></div>
                <div class='swiper-button-next'></div>
                <div class='swiper-scrollbar'></div>
            </div>
            ${modal(modalOpen, movieSelected, `row${num}`)}
        </div>
    `
}

export default row          