import {cartActions} from "../store/cart/cart.slice";
import {useDispatch} from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import {mainPageActions} from "../store/mainPage/main.slice";
import {checkAuth, login} from "../store/user/user.actions";
import {userActions} from "../store/user/user.slice";



const allActions = {
    ...cartActions,
    ...mainPageActions,
    ...userActions,
    login,
    checkAuth
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}