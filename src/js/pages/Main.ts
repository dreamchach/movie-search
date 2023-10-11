import banner from '../components/banner.ts'
import { IMovieDetail } from '../../types/main.ts'
import row from '../components/row.ts'

const getHtml = async (nowPlayData : IMovieDetail, rows : any) => {
    return `
        <main id="main-container">
                ${await banner(nowPlayData)}
                <div class='rows'>
                    ${await row(rows[0], 1)}
                    ${await row(rows[1], 2)}
                    ${await row(rows[2], 3)}
                    ${await row(rows[3], 4)}
                </div>

        </main>
    `
}

export default getHtml