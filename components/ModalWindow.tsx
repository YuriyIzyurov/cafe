import React, {FC, ReactNode} from "react";
import {ReviewDataType} from "../components/ReviewsPage";
import { ModalBG, ModalCard } from "./ReviewsPage/ReviewsPageStyles";
import FullReview from "./ReviewsPage/FullReview";


type PropsType = {
    modalIsOpen: boolean
    children: ReactNode
}
const ModalWindow:FC<PropsType> = ({modalIsOpen, children}) => {

    return (
        <ModalBG modalIsOpen={modalIsOpen} >
            <ModalCard modalIsOpen={modalIsOpen}>
                {children}
            </ModalCard>
        </ModalBG>
    );
};

export default ModalWindow;