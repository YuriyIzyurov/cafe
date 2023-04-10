import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productApi} from "./product/product.api";
import {cartReducer} from "./cart/cart.slice";
import {mainPageReducer} from "./mainPage/main.slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import {userReducer} from "../store/user/user.slice";

//todo: проверить как работает
/*const persistConfig = {
    key: 'kuzmich',
    storage,
    whitelist: ['auth']
}
const rootReducer = combineReducers({
    cart: cartReducer,
    mainPage: mainPageReducer
})
const persistedReducer = persistReducer(persistConfig,combineReducers)*/

export const store = configureStore({
    reducer: {[productApi.reducerPath]: productApi.reducer,
        cart: cartReducer,
        mainPage: mainPageReducer,
        user: userReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>