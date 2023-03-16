import { FC } from "react";
import { GetMessageTime } from "../../../utility/time";
import {CardHeader, CardText, CardWrapper, Star, } from "./ReviewCardStyles";
import {ReviewType} from "..";


const ReviewCard:FC<ReviewType> = ({name,rating,text, approved, updatedAt}) => {


    return (
        <CardWrapper>
            <CardHeader>
                <span>{name}</span>
                <span>
                    {[...Array(5)].map((star, index) => <Star key={index}/> )}
                </span>
            </CardHeader>
            <div style={{width: '95%', height: '1px', alignSelf: 'center', background: 'black', opacity: 0.4}}></div>
            <CardText>
                <p>{text.length > 60 ? text.slice(0, 60).padEnd(63, '.') : text}</p>
                <span>
                    <GetMessageTime date={updatedAt} />
                </span>
            </CardText>
        </CardWrapper>
    );
};

export default ReviewCard;