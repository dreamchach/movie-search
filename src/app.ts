import Login from './js/pages/Login.ts'
import Main from './js/pages/Main.ts'
import Search from './js/pages/Search.ts'
import Detail from './js/pages/Detail.ts'
import requests from './axios/request.ts'
import instance from './axios/instance.ts'
import { rowLists } from './js/utill/lists.ts'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

const app = document.querySelector('.App') as HTMLElement
const nav = document.querySelector('nav') as HTMLElement

const getNowPlaying = async () => {
    const response = await instance.get(requests.fetchNowPlaying)
    const movieId = response.data.results[Math.floor(Math.random() * response.data.results.length)].id
    const res = await instance.get(`/movie/${movieId}`, {params : {append_to_response : 'videos'}})
    return res.data
}
const nowPlayData = getNowPlaying()
let isClicked = false


const fetchRow = async (url : string) => {
    const res = await instance.get(url)
    return res.data.results
}
const rows = rowLists.map(async (item) => {
    return {...item, fetchUrl : await fetchRow(item.fetchUrl)}
})
let modalOpen = ''
let movieSelected = ''

const router = async (isClicked : boolean) => {
    const routes = [
        { path: "/", view: await Login() },
        { path: "/main", view: await Main(isClicked, await nowPlayData, await rows, modalOpen, movieSelected) },
        { path: "/search", view: await Search() }
    ]

    const pageMatches = routes.map((route) => {
        return {
          route,
          isMatch: route.path === location.pathname,
        };
    })
    
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    if(match) {
        const page = match.route.view
        app.innerHTML = page
        
        const mainBannerButton = document.querySelector('.banner-button')
        mainBannerButton?.addEventListener('click', () => {
            isClicked = !isClicked
            router(isClicked)
        })
        
        const swiper = new Swiper('.swiper', {
            modules : [Navigation, Pagination, Scrollbar, A11y],
            loop : true,
            navigation : true,
            pagination : {
                clickable : true
            },
            breakpoints : {
                1378 : {
                    slidesPerView : 6,
                    slidesPerGroup : 6
                },
                998 : {
                    slidesPerView : 5,
                    slidesPerGroup : 5
                },
                625 : {
                    slidesPerView : 4,
                    slidesPerGroup : 4
                },
                0 : {
                    slidesPerView : 3,
                    slidesPerGroup : 3
                }
            }
        })
        const row1 = document.querySelector('#row-container-1')
        row1?.addEventListener('click', (event) => {
            modalOpen = ''
            if((event.target as HTMLElement).className === 'swiper-img') {
                modalOpen = 'row1'
                movieSelected = (event.target as HTMLElement).id
                router(isClicked)
            }
        })
        const row2 = document.querySelector('#row-container-2')
        row2?.addEventListener('click', (event) => {
            modalOpen = ''
            if((event.target as HTMLElement).className === 'swiper-img') {
                modalOpen = 'row2'
                movieSelected = (event.target as HTMLElement).id
                router(isClicked)
            }
        })
        const row3 = document.querySelector('#row-container-3')
        row3?.addEventListener('click', (event) => {
            modalOpen = ''
            if((event.target as HTMLElement).className === 'swiper-img') {
                modalOpen = 'row3'
                movieSelected = (event.target as HTMLElement).id
                router(isClicked)
            }
        })
        const row4 = document.querySelector('#row-container-4')
        row4?.addEventListener('click', (event) => {
            console.log(event.target)
            modalOpen = ''
            if((event.target as HTMLElement).className === 'swiper-img') {
                modalOpen = 'row4'
                movieSelected = (event.target as HTMLElement).id
                router(isClicked)
            }
        })
        const modalClose = document.querySelector('.modal-close')
        modalClose?.addEventListener('click', () => {
            modalOpen = ''
            router(isClicked)
        })
    } else {
        let page = await Detail()
        app.innerHTML = page
    }
}

document.addEventListener('DOMContentLoaded', () => {
    nav.addEventListener('click', (event : Event) => {
        const target = event.target as HTMLAnchorElement
        if(target.matches('[data-link]')) {
            event.preventDefault()
            history.pushState(null, '', target.href)
        }
    })
    router(isClicked)
})

window.addEventListener('popstate', () => router(isClicked))

window.addEventListener('scroll', () => {
    if(window.scrollY < 50) {
        nav.style.backgroundColor = '#090b13'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
})
