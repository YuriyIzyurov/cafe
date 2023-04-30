import { instance } from "../api/api.interceptor"
import { ReviewType } from "../components/ReviewsPage"


const REVIEWS = '/reviews'

export const ReviewService = {
    async getReviews() {
        const {data} = await instance.get<ReviewType[]>(REVIEWS)
        return data
    },
    async createReview(review) {
        const {data} = await instance.post<ReviewType[]>(REVIEWS, review)
        return data
    },
    async updateReview(id: string) {
        const {data} = await instance.put<any>(`${REVIEWS}/${id}`)
        return data
    },
    async deleteReview(id: string) {
        const {data} = await instance.delete<any>(`${REVIEWS}/${id}`)
        return data
    },
}
