export const turncate = (str : string, n : number) => {
    if(str !== undefined) {
        return str.length > n ? str.substring(0, n) + '...' : str 
    }
}