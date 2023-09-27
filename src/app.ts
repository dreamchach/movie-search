import Login from './js/pages/Login.ts'
import Posts from './js/pages/Posts.ts'
import Settings from './js/pages/Settings.ts'
import NotFound from './js/pages/NotFound.ts'

const app = document.querySelector('.App') as HTMLElement
const nav = document.querySelector('nav') as HTMLElement

const router = async () => {
    const routes = [
        { path: "/", view: Login() },
        { path: "/posts", view: Posts() },
        { path: "/settings", view: Settings() },
    ]

    const pageMatches = routes.map((route) => {
        return {
          route,
          isMatch: route.path === location.pathname,
        };
    })
    
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    let page = ''
    
    if(match) {
        page = match.route.view
    } else {
        page = NotFound()
    }
    app.innerHTML = page
}

document.addEventListener('DOMContentLoaded', () => {
    nav.addEventListener('click', (event : Event) => {
        const target = event.target as HTMLAnchorElement
        if(target.matches('[data-link]')) {
            event.preventDefault()
            history.pushState(null, '', target.href)
            router()
        }
    })
    router()
})

window.addEventListener('popstate', () => router())

window.addEventListener('scroll', () => {
    if(window.scrollY < 50) {
        nav.style.backgroundColor = '#090b13'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
})