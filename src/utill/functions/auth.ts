import { signIn, signOut } from 'next-auth/react'

export const login = async () => {
    await signIn('google', {
        redirect : false,
        callbackUrl : 'http://localhost:3000/main'
    })
}
export const logout = async () => {
    await signOut({callbackUrl : 'http://localhost:3000/'})
}
export const search = async (key : string, router : any, value : string) => {
    if(key === 'Enter') {
        await router.push(`/search?value=${value}&page=1`)
    }
}