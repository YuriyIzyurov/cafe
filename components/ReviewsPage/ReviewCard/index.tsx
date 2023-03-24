import { FC } from "react";
import { GetMessageTime } from "../../../utility/time";
import {CardFooter, CardHeader, CardText, CardWrapper, ReadMore, Star, } from "./ReviewCardStyles";
import {ReviewType} from "..";

export const CardDivider = ({width = '95%'}) => <div style={{width: width, height: '1px', alignSelf: 'center',background: 'black', opacity: 0.4}}></div>
const ReviewCard:FC<ReviewType> = ({name,rating,text, approved, updatedAt, getReviewData}) => {

    const handleReadMore = () => {
        getReviewData({name,text,rating,updatedAt})
    }

    return (
        <CardWrapper>
            <CardHeader>
                <span>{name}</span>
                <span>
                    {[...Array(5)].map((star, index) => <Star key={index}/> )}
                </span>
            </CardHeader>
            <CardDivider/>
            <CardText>
                <p>{text.length > 200 ? text.slice(0, 200).padEnd(203, '.') : text}</p>
                <CardFooter>
                    <CardDivider/>
                    <div style={{display:'flex',justifyContent:'flex-end'}}>
                        {text.length > 200 && <ReadMore onClick={handleReadMore}>Читать далее...</ReadMore>}
                        <span style={{whiteSpace: 'nowrap',paddingRight:'5px'}}><GetMessageTime date={updatedAt} /></span>
                    </div>
                </CardFooter>
            </CardText>
        </CardWrapper>
    );
};

export default ReviewCard;