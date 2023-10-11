import { IVideo, IMovieDetail } from "../../types/main"
import { turncate } from "../utill/functions"

const PlayVideo = (videos : IVideo, img : string) => {
    if(videos.results.length > 0) {
        if(videos.results[0].key) return `
        <iframe 
        class='main-iframe'
        width='640'
        height='360'
        frameborder='0'
        allow='autoplay; fullscreen'
        src='https://www.youtube.com/embed/${videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${videos.results[0].key}'
        ></iframe>
        `
    }else return `<div id='main-banner-img' style='background-image : url("https://image.tmdb.org/t/p/original/${img}")'></div>`
}



const banner = (res : IMovieDetail) => {
    return `
    <header id="main-header-banner">
    ${PlayVideo(res.videos, res.backdrop_path)}
    <a href='/detail#${res.id}'>
        <div id='main-banner-background'>
        <div class="banner-contents">
        <h1 class="banner-title">
            ${res?.title || res?.name || res?.original_name}
        </h1>
        <p class="banner-description">
            ${turncate(res?.overview, 100)} 
        </p>
    </div>
    <div class="banner-fade-bottom"></div>
        </div>
    </a>
</header>
    `
}

export default banner

/*
        <header 
            class="banner" 
            id="main-header-banner"
            style='background-image : url("https://image.tmdb.org/t/p/original/${res?.backdrop_path}")'
        >
        <iframe 
        class='main-iframe'
        width='640'
        height='360'
        frameborder='0'
        allow='autoplay; fullscreen'
        src='https://www.youtube.com/embed/${res.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${res.videos.results[0].key}'
    >                </iframe>



            </div>
        </header>
*/