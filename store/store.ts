import {configureStore} from "@reduxjs/toolkit";
import {mainPageReducer} from "./mainPage/main.slice";
import {userReducer} from "../store/user/user.slice";



export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer,
        user: userReducer
    }
})

export type TypeRootState = ReturnType<typeof store.getState>
