import React, { FC } from "react";
import {
    ApproveBtnWrapper,
    Approved,
    ApproveSection,
    CardFooter,
    CardHeader,
    CardText,
    CardWrapper,
    NoIcon,
    NotiWrapper,
    OkIcon,
    ReadMore,
    Star,
} from "./ReviewCardStyles";
import {ReviewDataType, ReviewType} from "..";


type PropsType = {
    getReviewData: (arg: ReviewDataType) => void
    textShortened: string
    time: string
    isStatusShown: boolean
    mutate: (object) => void
}
export const CardDivider = ({width = '95%'}) => <div style={{width: width, height: '1px', alignSelf: 'center',background: 'black', opacity: 0.4}}></div>
const ReviewCard:FC<ReviewType & PropsType> = ({name,rating,text, _id, approved, updatedAt,mutate, getReviewData, textShortened, time, isStatusShown }) => {

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
                {(isStatusShown && !approved) && <ApproveNotification reviewID={_id} mutate={mutate}/>}
                <p id='text'>{textShortened}</p>
                <CardFooter>
                    <CardDivider/>
                    <div style={{display: 'flex', justifyContent: 'flex-end', position:'relative'}}>
                        {(isStatusShown && approved) &&
                            <Approved><OkIcon/></Approved>}
                        {textShortened.length > 200 && <ReadMore onClick={handleReadMore}>Читать далее...</ReadMore>}
                        <span style={{whiteSpace: 'nowrap', paddingRight: '5px'}}>{time}</span>
                    </div>
                </CardFooter>
            </CardText>
        </CardWrapper>
    );
};
function ApproveNotification({mutate, reviewID}:{mutate:(object) => void, reviewID: string}) {
    return (
        <NotiWrapper>
            <span>Не подтвержден</span>
            <ApproveSection>
                <ApproveBtnWrapper onClick={() => mutate({type: 'PUT', id: reviewID})}>
                    <OkIcon/>
                    <span>Подтвердить</span>
                </ApproveBtnWrapper>
                <ApproveBtnWrapper onClick={() => mutate({type: 'DELETE', id: reviewID})}>
                    <NoIcon/>
                    <span>Удалить</span>
                </ApproveBtnWrapper>
            </ApproveSection>
        </NotiWrapper>
    )
}
export default ReviewCard;