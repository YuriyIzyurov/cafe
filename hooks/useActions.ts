import {cartActions} from "../store/cart/cart.slice";
import {useDispatch} from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import {mainPageActions} from "../store/mainPage/main.slice";


const allActions = {
    ...cartActions,
    ...mainPageActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}