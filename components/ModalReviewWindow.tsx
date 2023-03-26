import React, { FC } from "react";
import {ModalDataType} from "../components/ReviewsPage";
import { ModalBG, ModalCard } from "./ReviewsPage/ReviewsPageStyles";
import {Star} from "../components/ReviewsPage/ReviewCard/ReviewCardStyles";
import {CardDivider} from "../components/ReviewsPage/ReviewCard";
import { getMessageTime } from "../utility/time";


type PropsType = {
    modalIsOpen: boolean
    reviewData: ModalDataType | null
    closeModal: () => void
}
const ModalReviewWindow:FC<PropsType> = ({modalIsOpen, reviewData, closeModal}) => {
    if(!reviewData) return null
    return (
        <ModalBG modalIsOpen={modalIsOpen} >
            <ModalCard modalIsOpen={modalIsOpen}>
                <header>
                    <h1>{reviewData.name}</h1>
                    <span>{[...Array(5)].map((star, index) => {
                        const color = index + 1 <= reviewData.rating ? 'orange' : 'grey'
                        return <Star key={index} color={color}/>
                    } )}</span>
                </header>
                <CardDivider width={'90%'}/>
                <main>
                    <p>{reviewData.text}</p>
                </main>
                <CardDivider width={'90%'}/>
                <footer>
                    <span onClick={closeModal}>Закрыть</span>
                    <span>{getMessageTime(reviewData.updatedAt)}</span>
                </footer>
            </ModalCard>
        </ModalBG>
    );
};

export default ModalReviewWindow;