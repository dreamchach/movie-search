import { categoryLists } from "../utill/lists"

const content = categoryLists.map((item) => `
    <div class="category-wrap">
        <img src="${item.image}" alt="${item.alt}" />
        <video autoplay loop muted>
            <source src="${item.video}" type="video/mp4" />
        </video>
    </div>
`).join('')

const category = () => {
    return `
        <div id='category-container'>
            ${content}
        </div>
    `
}

export default category