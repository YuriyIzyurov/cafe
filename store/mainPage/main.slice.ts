import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMain, Section} from "./main.types";


const initialState: IMain = {
    scrollTo: null
}

export const mainSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        activateScrolling: (state, action: PayloadAction<Section>) => {
            state.scrollTo = action.payload
        },

        deActivateScrolling: (state) => {
            state.scrollTo = null
        }
    }
})
export const mainPageReducer = mainSlice.reducer
export const mainPageActions = mainSlice.actions