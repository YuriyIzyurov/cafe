import {instance} from "../api/api.interceptor";
import { DishOrDrink } from "../components/MenuRedactorPage/EditCardModal";
import {Dish, DishSpecification, Drink, DrinksSpecification, Price} from "../utility/types";

const DISHES = '/dishes'
const DRINKS = '/drinks'
const SPEC = '/specification'
const VINELIST = '/vinelist'

export const MenuService = {
    async getMenu() {
        const response1 = await instance.get<DishSpecification[]>(DISHES).then(response => response.data)
        const response2 = await instance.get<DrinksSpecification[]>(DRINKS).then(response => response.data)

        return [...response1, ...response2]
    },
    async getDishes() {
        const response = await instance.get<DishSpecification[]>(DISHES).then(response => response.data)
        return response
    },
    async getDrinks() {
        const response = await instance.get<DrinksSpecification[]>(DRINKS).then(response => response.data)
        return response
    },
    async updateMenuPosition(type: string, id: string, data: DishOrDrink) {
        const path = type === 'dish' ? DISHES : DRINKS
        return await instance.put(`${path}/${id}`, data).then(response => response.data)
    },
    async updateSpecificationName(type: string, id: string, data: string) {
        const path = type === 'dish' ? DISHES + SPEC : DRINKS + VINELIST
        return await instance.put(`${path}/${id}`, {name: data}).then(response => response.data)
    },
    async createPosition(type: string, id: string, data: Dish | Drink) {
        const path = type === 'dish' ? DISHES : DRINKS
        return await instance.post(`${path}`, data).then(response => response.data)
    },
    async deletePosition(type: string, id: string, updData: string) {
        const path = type === 'dish' ? DISHES : DRINKS
        return await instance.delete(`${path}/${id}`, {data: {id: updData}} ).then(response => response.data)
    },
    async createReview(review) {
        const response1 = await instance.post(DISHES, review)
        const response2 = await instance.post(DRINKS, review)
        return response1
    }}

