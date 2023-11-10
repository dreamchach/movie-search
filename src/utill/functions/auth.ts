import { signIn, signOut } from 'next-auth/react'
import { host } from '../const'

export const login = async () => {
    await signIn('google', {
        redirect : false,
        callbackUrl : `${host}/main`
    })
}
export const logout = async () => {
    await signOut({callbackUrl : `${host}/`})
}
export const search = async (key : string, router : any, value : string) => {
    if(key === 'Enter') {
        await router.push(`/search?value=${value}&page=1`)
    }
}
