import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {checkAuth, login} from "./user.actions";




export type ErrorResponseType = {
    error: string
    message: string[] | string
    statusCode: number
}

const initialState = {
    user: null,
    isLoading: false,
    error: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteError: (state) => {
            state.error = null
        },
        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
            state.isLoading = true
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
            })
            .addCase(login.rejected, (state, error) => {
                state.isLoading = false
                const errorObj = error.payload as ErrorResponseType
                const errMessage = typeof errorObj.message === 'object' ? errorObj.message[0] : errorObj.message
                state.error = errMessage
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true
            })
            .addCase(checkAuth.fulfilled, (state, {payload}) => {
                state.user = payload.user
                state.isLoading = false
            })
            .addCase(checkAuth.rejected, (state, error) => {
                state.isLoading = false
                const errorObj = error.payload as ErrorResponseType
                const errMessage = typeof errorObj.message === 'object' ? errorObj.message[0] : errorObj.message
                console.log(errMessage)
            })
    }
})
export const userReducer = userSlice.reducer
export const userActions = userSlice.actions

