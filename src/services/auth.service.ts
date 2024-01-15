import { decodeToken } from "@/utils/jwt"
import { getFromLocalStorage, setToStorage } from "@/utils/local-storage"
import { requestToBodyStream } from "next/dist/server/body-streams"

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    setToStorage('accessToken', accessToken as string)
}

export const getUserInfo = () => {
    const token = getFromLocalStorage('accessToken')
    if (token) {
        const decodedData = decodeToken(token)
        console.log(decodedData)
        return decodedData

    }
    return ""
}

export const isLogedIn = () => {
    const token = getFromLocalStorage('accessToken')
    return !!token
}
export const removeUser = ()=>{
    const removeUser = localStorage.removeItem('accessToken');
    return removeUser
}