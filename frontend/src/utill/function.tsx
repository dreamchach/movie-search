export const LinkTo = (id : number) => {
    if(id) return `/detail/${id}`
}
export const imgSrc = (img : string) => {
    if(img === null) return `/images/no-movie.png`
    if(img) return `https://image.tmdb.org/t/p/original${img}`
}
export const videoSrc = (srcKey : string, site : string, auto : boolean) => {
    const play = auto ? 'autoplay=1' : ''
    if(srcKey && site === 'YouTube') return 'https://www.youtube.com/embed/' + srcKey + '?controls=0&' + play + '&loop=1&mute=1&playlist=' + srcKey
  }