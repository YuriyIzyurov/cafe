import { axiosClassic } from "../api/api"
import { ReviewType } from "../components/ReviewsPage"


const REVIEWS = '/reviews'

export const ReviewService = {
    async getReviews() {
        const {data} = await axiosClassic.get<ReviewType[]>(REVIEWS)
        return data
    },
    async createReview(review) {
        console.log('Отправка POST запроса на сервер:', review);
        const {data} = await axiosClassic.post<ReviewType[]>(REVIEWS, review)
        console.log('Ответ от сервера:', data);
        return data
}}