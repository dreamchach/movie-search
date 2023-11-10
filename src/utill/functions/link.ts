import { NextRouter } from "next/router"

export const LinkTo = (id : number) => {
    if(id) return `/detail/${id}`
}
export const goPrev = (router : NextRouter, value : string, page : string) => {
    router.push(`/search?value=${value}&page=${Number(page) - 1}`)
}
export const goNext = (router : NextRouter, value : string, page : string) => {
    router.push(`/search?value=${value}&page=${Number(page) + 1}`)
}