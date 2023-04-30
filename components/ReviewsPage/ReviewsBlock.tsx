import { ReviewsBlockWrapper} from "./ReviewsPageStyles";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, A11y, Virtual } from 'swiper';
import 'swiper/css';
import React, {FC, useEffect, useState} from "react";
import ReviewCard, {CardDivider} from "./ReviewCard";
import {ReviewDataType, ReviewType} from ".";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getMessageTime} from "../../utility/time";
import { ReviewService } from "../../services/review.service";
import {IUser} from "../../services/auth.service";




type PropsType = {
    prevEl: HTMLElement,
    nextEl: HTMLElement,
    reviews: ReviewType[],
    getReviewData:(arg: ReviewDataType) => void
    currentProfile : IUser | null
}

const ReviewsBlock:FC<PropsType> = ({ prevEl, nextEl, reviews, getReviewData, currentProfile }) => {

    const queryClient = useQueryClient()
    const {data} = useQuery(
          ['reviews'],
           ReviewService.getReviews,
        {initialData: reviews}
    )
    const {mutate} = useMutation(fetchDataHandler,{
        onSuccess:()=>{
            queryClient.invalidateQueries(['reviews'])
        }
    })
    async function fetchDataHandler({type, id}) {
        if(type === 'PUT')
            return ReviewService.updateReview(id)
        else if(type === 'DELETE')
            return ReviewService.deleteReview(id)
    }
    const handleMutate = ({type, id}) => {
        mutate({type, id})
    }


    return (
        <ReviewsBlockWrapper>
            <Swiper
                modules={[Navigation, A11y, Virtual]}
                navigation={{
                    prevEl,
                    nextEl,
                    disabledClass: 'disabled_swiper_button',
                }}
                centerInsufficientSlides={true}
                grabCursor={true}
                virtual
                slidesOffsetBefore={10}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    960: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    }
                }}
            >
                {data.map((review, index) => {
                    const textShortened = review.text.length > 200 ? review.text.slice(0, 200).padEnd(203, '.') : review.text
                    const time = getMessageTime(review.updatedAt)
                    return <SwiperSlide key={review._id} virtualIndex={index}>
                        <ReviewCard
                            key={'card' + index}
                            {...review}
                            textShortened={textShortened}
                            time={time}
                            getReviewData={getReviewData}
                            mutate={handleMutate}
                            isStatusShown={!!currentProfile}
                        />
                    </SwiperSlide>
                })}
            </Swiper>
        </ReviewsBlockWrapper>
    );
};

export default ReviewsBlock;
