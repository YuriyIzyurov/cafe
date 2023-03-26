import React, { FC } from "react";
import {CardFooter, CardHeader, CardText, CardWrapper, ReadMore, Star, } from "./ReviewCardStyles";
import {ModalDataType, ReviewType} from "..";

type PropsType = {
    getReviewData: (arg: ModalDataType) => void
    textShortened: string
    time: string
}
export const CardDivider = ({width = '95%'}) => <div style={{width: width, height: '1px', alignSelf: 'center',background: 'black', opacity: 0.4}}></div>
const ReviewCard:FC<ReviewType & PropsType> = ({name,rating,text, approved, updatedAt, getReviewData, textShortened, time }) => {

    const handleReadMore = () => {
        getReviewData({name,text,rating,updatedAt})
    }

    return (
        <CardWrapper>
            <CardHeader>
                <span>{name}</span>
                <span>
                    {[...Array(5)].map((star, index) => {
                        const color = index + 1 <= rating ? 'orange' : 'grey'
                        return <Star key={index} color={color}/>
                    })}
                </span>
            </CardHeader>
            <CardDivider/>
            <CardText>
                <p id='text'>{textShortened}</p>
                <CardFooter>
                    <CardDivider/>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        {textShortened.length > 200 && <ReadMore onClick={handleReadMore}>Читать далее...</ReadMore>}
                        <span style={{whiteSpace: 'nowrap', paddingRight: '5px'}}>{time}</span>
                    </div>
                </CardFooter>
            </CardText>
        </CardWrapper>
    );
};

export default ReviewCard;