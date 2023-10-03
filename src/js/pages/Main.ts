import Logo from '../../public/images/logo.svg'
import banner from '../components/banner.ts'
import { IMovieDetail } from '../../types/main.ts'
import category from '../components/category.ts'
import row from '../components/row.ts'

const getHtml = async (isClicked : boolean, nowPlayData : IMovieDetail, rows : any, modalOpen : string, movieSelected : string) => {
    return `
        <main id="main-container">
            <nav class="nav">
                <a href="/" class="nav_item" data-link id="logo">
                    <img 
                        alt="Disney Plus Logo"
                        src="${Logo}"
                    />
                </a>
            </nav>
                ${await banner(nowPlayData, isClicked)}
                ${await category()}
                <div class='rows'>
                    ${await row(rows[0], 1, modalOpen, movieSelected)}
                    ${await row(rows[1], 2, modalOpen, movieSelected)}
                    ${await row(rows[2], 3, modalOpen, movieSelected)}
                    ${await row(rows[3], 4, modalOpen, movieSelected)}
                </div>

        </main>
    `
}

export default getHtml