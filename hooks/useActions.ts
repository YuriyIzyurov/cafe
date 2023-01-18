import {cartActions} from "../store/cart/cart.slice";
import {useDispatch} from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";


const allActions = {
    ...cartActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}