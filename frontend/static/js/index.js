import Home from './pages/Home.js'
import Posts from './pages/Posts.js'
import Settings from './pages/Settings.js'
import NotFound from './pages/NotFound.js'

const router = async () => {
    const routes = [
        {path : '/', view: await Home()},
        {path : '/posts', view: await Posts()},
        {path : '/settings', view: await Settings()},
    ]
    const pageMatches = routes.map((route) => {
        return {
            route,
            isMatch : route.path === location.pathname
        }
    })
    
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch)
    let page = ''

    if(!match) {
        page = await NotFound()
    }else {
        page = match.route.view
    }

    document.querySelector('#root').innerHTML = page
}
const nav = document.querySelector('nav')

document.addEventListener('DOMContentLoaded', () => {
    nav.addEventListener('click', (event) => {
        console.log(event.target)
        if(event.target.matches('[data-link]')) {
            history.pushState(null, null, event.target.href)
            router()
        }
    })
    router()
})

window.addEventListener('popstate', () => {
    router()
})