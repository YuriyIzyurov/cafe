import axios from "axios";

export const axiosClassic = axios.create({
    baseURL: process.env.LOCAL_SERVER_URL,
    //baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
    },
})