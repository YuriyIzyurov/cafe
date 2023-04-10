import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService, IAuthData, ResponseReturnType} from "../../services/auth.service";
import {errorCatch} from "../../api/api.helper";
import {removeTokensStorage} from "../../utility/auth.helper";
import { userActions } from "./user.slice";


export const login = createAsyncThunk<ResponseReturnType, IAuthData>('auth/login', async (data, thunkApi) => {
    try {
        return await AuthService.login(data)
    } catch (e) {
        setTimeout(() => {
            thunkApi.dispatch(userActions.deleteError())
        }, 3000)
        return thunkApi.rejectWithValue(e)
    }
})
export const logout = createAsyncThunk('auth/logout', async () => {
    removeTokensStorage()
})

export const checkAuth = createAsyncThunk('auth/check-auth', async (_,thunkApi) => {
    try {
        const response = await AuthService.getNewTokens()
        return response.data
    } catch (e) {
        if(errorCatch(e) === 'jwt expired') {
            thunkApi.dispatch(logout())
        }
        return thunkApi.rejectWithValue(e)
    }
})