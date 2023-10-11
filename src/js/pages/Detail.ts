import instance from "../../axios/instance"
import { IDetailMovie, IGenres } from "../../types/main"
import { turncate } from "../utill/functions"

const getHtml = async () => {
    if(location.pathname === '/detail') {
    const id = location.hash.substring(1) || ''
    let data : IDetailMovie = {}
    const movie = async () => {
        if(id !== '') {
            try {
                const res = await instance.get(`/movie/${id}`)
                data = res.data
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
    }
    await movie()

    const map = (item : IGenres[]) => {
        const answer = item.map((i) => i.name).join(' / ')
        return answer
    }

    const summary = () => {
        let overview = data.overview?.split(/[.…]/).filter((i) => i !== '') as string[]

        if(overview.length > 2)return `
            <div id='simple-view'>${[overview[0], overview[1]].join('. \n')}…</div>
            <details id='overview'>
                <summary>더보기</summary>
                <p>${overview.slice(2).join('. \n')}</p>
            </details> 
        `
        else return `
            <div id='simple-view'>${overview.join('. \n')}</div>
        `
    }
    
    return `
        <section id='detail-container'>
            <div id='movie-poster-info'>
                <div>
                    <img 
                        class="modal-poster-img"
                        src="https://image.tmdb.org/t/p/original/${data.poster_path}"
                        alt="img"
                    />
                </div>
                <div id='movie-info'>
                    <div id='movie-title'>
                        <h2>${data.title}</h2>
                        <div>${data.original_title === data.title ? '' : data.original_title + ','} ${data.release_date?.split('-')[0]}</div>
                    </div>
                    <div id='movie-full-info'>
                        <div id='movie-default-info'>
                            <div><span class='sub-title'>개봉</span> ${data.release_date?.split('-').join('.')}</div>
                            <div><span class='sub-title'>장르</span> ${data.genres !== undefined && map(data.genres)}</div>
                            <div><span class='sub-title'>국가</span> ${data.production_countries !== undefined && map(data.production_countries)}</div>
                            <div><span class='sub-title'>러닝타임</span> ${data.runtime}분</div>
                        </div>
                        <div id='movie-client-info'>
                            <div><span class='sub-title'>평점</span> <span id='red-star'>★</span> ${data.vote_average?.toFixed(1)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2 id='tag-over'>주요정보</h2>
                    <div id='overview-container'>
                        <div id='tagline'>${data.tagline ? data.tagline : ''}</div>
                        ${summary()}
                    </div>
                </div>
            </div>
        </section>
    `
    }
    
}

export default getHtml