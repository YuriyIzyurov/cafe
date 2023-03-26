import { ReviewsBlockWrapper} from "./ReviewsPageStyles";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, A11y, Virtual } from 'swiper';
import 'swiper/css';
import React, {useState} from "react";
import ReviewCard, {CardDivider} from "./ReviewCard";
import {ModalDataType, ReviewType} from ".";
import {useQuery} from "@tanstack/react-query";
import { ReviewService } from "../../services/ReviewService";
import {getMessageTime} from "../../utility/time";





const ReviewsBlock = ({ prevEl, nextEl, reviews, getReviewData } : { prevEl: HTMLElement, nextEl: HTMLElement, reviews: ReviewType[], getReviewData:(arg: ModalDataType) => void }) => {
    const [swiper, setSwiperLocal] = useState<SwiperCore | null>(null);
//{ isLoading, error, data }
    const {data} = useQuery(
          ['reviews'],
           ReviewService.getReviews,
        {initialData: reviews}
    )


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
                        />
                    </SwiperSlide>
                })}
            </Swiper>
        </ReviewsBlockWrapper>
    );
};

export default ReviewsBlock;