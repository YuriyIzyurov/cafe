import axios from "axios";

export const axiosClassic = axios.create({
    baseURL: 'https://jwt-authorization-nest.vercel.app',
    //baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
})