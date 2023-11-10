export const publish = (date : string) => {
    const first = date?.split('T')[0]
    const second = first?.split('-').join('.')
    return second
}