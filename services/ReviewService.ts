import { axiosClassic } from "../api/api"
import { ReviewType } from "../components/ReviewsPage"



const REVIEWS = '/reviews'

export const ReviewService = {
    async getReviews() {
        const {data} = await axiosClassic.get<ReviewType[]>(REVIEWS)
        return data
    },
    async createReview(review) {
        const {data} = await axiosClassic.post<ReviewType[]>(REVIEWS, review)
        return data
    },
}