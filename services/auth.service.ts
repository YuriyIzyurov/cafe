import Cookies from 'js-cookie'
import axios, {AxiosError, AxiosResponse} from "axios";
import {instance} from "../api/api.interceptor";
import { saveToStorage } from '../utility/auth.helper';

export interface IAuthData {
    username: string
    password: string
}
export interface IUser {
    username: string
    id: string
}
export type ResponseReturnType = {
    user: IUser
    accessToken: string
    refreshToken: string
}

export const AuthService = {
    async login(data: IAuthData) {
        const response = await instance.post<ResponseReturnType>('auth/login', data).then(response => response.data)
        if(response.accessToken) saveToStorage(response)
        return response
    },
    async register(data: IAuthData) {
        const response = await instance.post<ResponseReturnType>('auth/login', data).then(response => response.data)
        if(response.accessToken) saveToStorage(response)
        return response
    },
    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken')

        const response = await instance.post('auth/login/access-token', {refreshToken})
        if(response.data.accessToken) saveToStorage(response.data)
        return response
    }
}