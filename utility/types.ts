

interface CommonProperties {
    name: string
    specification: string
    __v: number
    _id: string
}

export interface Drink extends CommonProperties {
    price: Price
}

export interface Dish extends CommonProperties {
    description: string
    price: number
}

interface CommonSpecification {
    _id: string;
    name: string;
    __v: number;
    dishes: Dish[];
}

export interface DishSpecification extends CommonSpecification {
    dishes: Dish[];
}

export interface DrinksSpecification extends CommonSpecification {
    drinks: Drink[];
}
export type Price = {
    ml50: number
    ml100: number
    bottle: number
    id: string
}