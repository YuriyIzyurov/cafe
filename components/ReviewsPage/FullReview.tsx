
import React, { FC } from "react";
import { ReviewDataType } from ".";
import { getMessageTime } from "../../utility/time";
import { CardDivider } from "./ReviewCard";
import { Star } from "./ReviewCard/ReviewCardStyles";
import { FullRevWrapper } from "./ReviewsPageStyles";


type PropsType = {
    reviewData: ReviewDataType
    closeModal: () => void
}
const FullReview:FC<PropsType> = ({reviewData, closeModal}) => {
    return (
        <FullRevWrapper>
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
        </FullRevWrapper>
    );
};

export default FullReview;