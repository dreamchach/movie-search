import instance from "../../axios/instance"

const getHtml = async () => {
    const id = location.hash.substring(1)
    let data = {
        backdrop_path : ''
    }
    const movie = async () => {
        try {
            const res = await instance.get(`/movie/${id}`)
            data = res.data
        } catch (error) {
            data = {
                backdrop_path : ''
            }
        }
    }
    await movie()
    
    if(Object.keys(data).length === 1) return ''
    else {
        return `
            <section>
                <img 
                    class="modal-poster-img"
                    src="https://image.tmdb.org/t/p/original/${data.backdrop_path}"
                    alt="img"
                />
            </section>
        `
    }
}

export default getHtml