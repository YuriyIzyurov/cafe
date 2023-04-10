import axios from "axios";
import { getAccessToken } from "../utility/auth.helper";
import {errorCatch, getContentType} from "./api.helper";

//todo:почему динамическая переменная не работает?
export const instance = axios.create({
    baseURL: process.env.NODE_ENV==='development' ? process.env.LOCAL_SERVER_URL : process.env.SERVER_URL,
    headers: getContentType(),
})

instance.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if(config && config.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config
})
instance.interceptors.response.use(config => config, async error => {
    const originalRequest = error.config
    if((error.response.status === 401 || errorCatch(error) === 'jwt expired' || errorCatch(error) === 'jwt must be provided') && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            //get new tokens
            console.log('getting new tokens...')
            return instance.request(originalRequest)
        } catch (error) {
            if(errorCatch(error) === 'jwt expired') {
                //delete tokens
            }

            return Promise.reject({ error: 'Ошибка: ' + error.message, status: error.response.status });
        }
    }

    return Promise.reject({ ...error.response.data });
})
