import Cookies from 'js-cookie'


export const getAccessToken = (): string | null => {
    const accessToken = Cookies.get('accessToken')
    return accessToken || null
}

export const removeTokensStorage = () => {
    Cookies.remove('accessToken')
    Cookies.remove('refreshToken')
}
export const saveToStorage = (data) => {
    Cookies.set('accessToken',data.accessToken)
    Cookies.set('refreshToken',data.refreshToken)
}
