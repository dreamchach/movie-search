import { IVideo, IMovieDetail } from "../../types/main"

const turncate = (str : string, n : number) => {
    if(str !== undefined) {
        return str.length > n ? str.substring(0, n) + '...' : str 
    }
}

const PlayButton = (videos : IVideo) => {
    if(videos.results.length > 0) {
        if(videos.results[0].key) return `<button class="banner-button play">Play</button>`
    }else return ''
}

const banner = (res : IMovieDetail, isClicked : boolean) => {
    if(isClicked) return `
        <div class='main-container'>
            <div class='main-home-container'>
                <iframe 
                    class='main-iframe'
                    width='640'
                    height='360'
                    frameborder='0'
                    allow='autoplay; fullscreen'
                    src='https://www.youtube.com/embed/${res.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${res.videos.results[0].key}'
                >
                </iframe>
            </div>
        </div>
        <button class='banner-button'>X</button>
    `
    else return `
        <header 
            class="banner" 
            id="main-header-banner"
            style='background-image : url("https://image.tmdb.org/t/p/original/${res?.backdrop_path}")'
        >
            <div class="banner-contents">
                <h1 class="banner-title">
                    ${res?.title || res?.name || res?.original_name}
                </h1>
                <div class="banner-buttons">
                    ${PlayButton(res.videos)}
                </div>
                <p class="banner-description">
                    ${turncate(res?.overview, 100)} 
                </p>
            </div>
            <div class="banner-fade-bottom"></div>
        </header>
    `
}

export default banner