export const setToStorage = (key: string, accessToken: string) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return localStorage.setItem(key, accessToken)
}
export const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return localStorage.getItem(key)
}