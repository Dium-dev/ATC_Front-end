import axios from 'axios'
const BASE_API_URL = process.env.NEXT_PUBLIC_API_ULR

export const mainApi = axios.create({
    baseURL: BASE_API_URL
})
