import {configureStore} from "@reduxjs/toolkit";
import {productApi} from "./product/product.api";
import {cartReducer} from "./cart/cart.slice";
import {mainPageReducer} from "./mainPage/main.slice";

export const store = configureStore({
    reducer: {[productApi.reducerPath]: productApi.reducer, cart: cartReducer, mainPage: mainPageReducer},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>