export const bgSrc = (image : string) => {
    if(image) return `url('https://image.tmdb.org/t/p/original${image}')`
}
export const overView = (overview : string, n : number) => {
    if(overview) {
      return overview.length > n ? overview.substring(0, n) + '...' : overview
    }
}
export const videoSrc = (srcKey : string, site : string, auto : boolean) => {
    const play = auto ? 'autoplay=1' : ''
    if(srcKey && site === 'YouTube') return 'https://www.youtube.com/embed/' + srcKey + '?controls=0&' + play + '&loop=1&mute=1&playlist=' + srcKey
}
export const imgSrc = (img : string) => {
    if(img === null) return `/images/no-movie.png`
    if(img) return `https://image.tmdb.org/t/p/original${img}`
}
