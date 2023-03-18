import { ReviewsBlockWrapper} from "./ReviewsPageStyles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import {useState} from "react";
import ReviewCard from "./ReviewCard";
import { ReviewType } from ".";
import {useQuery} from "@tanstack/react-query";
import { ReviewService } from "../../services/ReviewService";




const ReviewsBlock = ({ prevEl, nextEl, reviews } : { prevEl: HTMLElement, nextEl: HTMLElement, reviews: ReviewType[] }) => {

//{ isLoading, error, data }
    /*const {data} = useQuery(
          ['reviews'],
           ReviewService.getReviews,
        {initialData: reviews}
    )*/


    const [swiper, setSwiper] = useState(null);

    const slides = reviews.map((review, index) =>
        <SwiperSlide key={index}>
            <ReviewCard key={'card'+index} {...review}/>
        </SwiperSlide>)

    //todo: пофиксить перемотку последнего слайда
    return (
        <ReviewsBlockWrapper>
            <Swiper
                modules={[Navigation, A11y]}
                navigation={{
                    prevEl,
                    nextEl,
                    disabledClass: 'disabled_swiper_button',
                }}
                centerInsufficientSlides={true}
                grabCursor={true}
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
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {slides}
            </Swiper>
        </ReviewsBlockWrapper>
    );
};

export default ReviewsBlock;