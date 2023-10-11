import Login from './js/pages/Login.ts'
import Main from './js/pages/Main.ts'
import Search from './js/pages/Search.ts'
import Detail from './js/pages/Detail.ts'
import NotFound from './js/pages/NotFound.ts'
import requests from './axios/request.ts'
import instance from './axios/instance.ts'
import { rowLists } from './js/utill/lists.ts'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import auth from './firebase.ts'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

const web = document.querySelector('.App') as HTMLElement
const nav = document.querySelector('nav') as HTMLElement
const searchInput = document.querySelector('.search-input') as HTMLElement
let searchPage = 1

//const auth = getAuth()
const provider = new GoogleAuthProvider()

const getNowPlaying = async () => {
    const response = await instance.get(requests.fetchNowPlaying)
    const movieId = response.data.results[Math.floor(Math.random() * response.data.results.length)].id
    const res = await instance.get(`/movie/${movieId}`, {params : {append_to_response : 'videos'}})
    return res.data
}
const nowPlayData = getNowPlaying()


const fetchRow = async (url : string) => {
    const res = await instance.get(url)
    return res.data.results
}
const rows = rowLists.map(async (item) => {
    return {...item, fetchUrl : await fetchRow(item.fetchUrl)}
})

const router = async () => {
    const routes = [
        { path: "/", view: await Login() },
        { path: "/main", view: await Main(await nowPlayData, await rows) },
        { path: "/search", view: await Search(searchPage) },
        { path: '/detail', view: await Detail() }
    ]

    const pageMatches = routes.map((route) => {
        return {
          route,
          isMatch: route.path === location.pathname,
        };
    })
    
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if(match && match.route.view !== undefined) {
        const page = match.route.view
        web.innerHTML = page
        
        const swiper = new Swiper('.swiper', {
            modules : [Navigation, Pagination, Scrollbar, A11y],
            loop : true,
            navigation : {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination : {
                clickable : true
            },
            breakpoints : {
                1378 : {
                    slidesPerView : 4,
                    slidesPerGroup : 4
                },
                998 : {
                    slidesPerView : 3,
                    slidesPerGroup : 3
                },
                625 : {
                    slidesPerView : 2,
                    slidesPerGroup : 2
                },
                0 : {
                    slidesPerView : 1,
                    slidesPerGroup : 1
                }
            }
        })

        const loginButton = document.querySelector('#login')
        loginButton?.addEventListener('click', () => {
            signInWithPopup(auth, provider)
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
        })

        const NextPageButton = document.querySelector('.next-page')
        NextPageButton?.addEventListener('click', () => {
            searchPage += 1
            router()
        })
        const PrevPageButton = document.querySelector('.prev-page')
        PrevPageButton?.addEventListener('click', () => {
            searchPage -= 1
            router()
        })

        const logoutButton = document.querySelector('#logout')
        logoutButton?.addEventListener('click', () => {
            signOut(auth)
            .then(() => {
                if(location.pathname !== '/') location.pathname = '/'
            })
            .catch((error) => console.log(error))
        })
    } else {
        let page = await NotFound()
        web.innerHTML = page  
    }
}

document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, (user) => {
        if(user) {
            if(location.pathname === '/') {
                location.pathname = '/main'
            }
        }else if(location.pathname !== '/') location.pathname = '/'
    })
    nav.addEventListener('click', (event : Event) => {
        const target = event.target as HTMLAnchorElement
        if(target.matches('[data-link]')) {
            event.preventDefault()
            history.pushState(null, '', target.href)
        }
    })
    router()

    searchInput.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            const search = (event.target as HTMLInputElement).value
            location.href = `/search?${search}`
        }
    })
})

window.addEventListener('popstate', () => router())
