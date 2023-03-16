import photo1 from "public/images/reviews/photo1.jpg";
import photo2 from "public/images/reviews/photo2.jpg";
import photo3 from "public/images/reviews/photo3.jpg";
import favicon from "public/images/favicon.ico";
import Image from "next/image";
import React, {FC, useEffect, useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import {
    ImgDivider,
    PaginationButton,
    PaginationButtonLeft,
    PaginationButtonRight, ParallaxBG, ParallaxImgWrapper, ReviewForm,
    ReviewsContainer,
    ReviewsFooter,
    ReviewsPageImgWrapper,
    ReviewsSection,
    TextBlockFirst, TextBlockHeader, TextBlockP, TextBlockSecond, TextBlockSecondWrapper, TextBlockThird
} from "./ReviewsPageStyles";
import {ArrowForward, ArrowRight } from "../MainPage/HeroSection/HeroSectionStyles";
import {Button, ButtonRoute, ReviewButton} from "../ButtonElement";
import ReviewsBlock from "./ReviewsBlock";
import CustomForm from "../../utility/customForm";
import {CloseIcon, Icon } from "../Sidebar/SidebarStyles";
gsap.registerPlugin(ScrollTrigger);

export type ReviewType = {
    name: string
    rating: number
    text: string
    approved: boolean
    createdAt: string
    updatedAt: string
    _id: string
}

const ReviewsPage:FC<{reviews: ReviewType[], closeSidebar: () => void}> = ({reviews, closeSidebar}) => {
    const [hover, setHover] = useState(false)
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
    const [isFormActive, setFormActive] = useState(false)
    const [isBtnDisabled, setBtnDisabled] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    const setActive = () => {
        setFormActive(!isFormActive)
    }

    useEffect(() => {

        const mm = gsap.matchMedia();
        mm.add(
            {
                isActive: '(max-width: 768px)'
            },
            (context) => {
                if (context.conditions.isActive) {
                    gsap.to("#parallax-item", {
                        yPercent: -10 ,
                        ease: 'power2.inOut',
                        scrollTrigger: {
                            trigger: "#parallax-ankor",
                            start: "top bottom",
                            end: "top 10%",
                            scrub: 0.8
                        },
                    });
                }
            }
        );
        return () =>  mm.revert()
    }, [])



    return (
        <ReviewsContainer onClick={closeSidebar}>

            {/*наша история*/}
            <ReviewsSection>
                <ReviewsPageImgWrapper>
                    <Image src={photo1}  fill placeholder="blur" style={{objectFit:"cover"}} alt='photo1'/>
                </ReviewsPageImgWrapper>
                <TextBlockFirst>
                    <TextBlockHeader>
                        Наша история
                    </TextBlockHeader>
                    <p>
                        Наше кафе на набережной города Иваново в историческом месте открылось 25 лет назад. За это время мы стали любимым местом для многих гостей. Мы гордимся нашей историей и традициями, которые передаются из поколения в поколение. Мы всегда рады удивить вас новыми блюдами и оставить незабываемые впечатления. Спасибо, что выбираете нас и делаете нас частью вашей жизни!
                    </p>
                        <ButtonRoute
                            href='/rooms'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                        >
                            <ReviewButton>
                                Фото залов {hover ? <ArrowForward/> : <ArrowRight/>}
                            </ReviewButton>
                        </ButtonRoute>
                </TextBlockFirst>
            </ReviewsSection>

           {/*отзывы*/}
            <ReviewsSection>
                <TextBlockSecondWrapper>
                    <TextBlockSecond>
                        <TextBlockHeader>
                            Отзывы о нас
                        </TextBlockHeader>

                        {/*слайдер*/}
                        <ReviewsBlock reviews={reviews} prevEl={prevEl} nextEl={nextEl}/>

                        <ReviewsFooter>
                            <PaginationButton ref={(node) => setPrevEl(node)}>
                                <PaginationButtonLeft/>
                            </PaginationButton>
                            <Button onClick={setActive} disabled={isBtnDisabled}>
                                Написать отзыв
                            </Button>
                            <PaginationButton ref={(node) => setNextEl(node)}>
                                <PaginationButtonRight/>
                            </PaginationButton>
                        </ReviewsFooter>
                    </TextBlockSecond>
                    {/*выезжающая форма отправки отзыва*/}
                    <ReviewForm isFormActive={isFormActive}>
                        <Icon onClick={() => setFormActive(false)}>
                            <CloseIcon/>
                        </Icon>
                        <CustomForm setFormActive={setFormActive} setBtnDisabled={setBtnDisabled}/>
                    </ReviewForm>
                </TextBlockSecondWrapper>
                <ReviewsPageImgWrapper>
                    <Image src={photo2}  fill placeholder="blur" style={{objectFit:"cover"}} alt='photo2'/>
                </ReviewsPageImgWrapper>
            </ReviewsSection>

            {/*логотип кузьмич*/}
            <ReviewsSection lastSection>
                    <ReviewsPageImgWrapper id='parallax-ankor' display='true'>
                        <ParallaxBG id='parallax-item'>
                            <ParallaxImgWrapper hideOnWide>
                                <Image src={photo1}  fill placeholder="blur" style={{objectFit:"cover"}} alt='photo1'/>
                            </ParallaxImgWrapper>
                            <ImgDivider/>
                            <ParallaxImgWrapper>
                                <Image src={photo3}  fill placeholder="blur" style={{objectFit:"cover"}} alt='photo3'/>
                            </ParallaxImgWrapper>
                        </ParallaxBG>
                    </ReviewsPageImgWrapper>
                    <TextBlockThird>
                        <TextBlockHeader>
                            УКузьмича
                        </TextBlockHeader>
                        <TextBlockP>
                            Быстро | Вкусно | По-домашнему
                        </TextBlockP>
                        <Image src={favicon} style={{opacity: 0.7}} alt='logo'/>
                    </TextBlockThird>
            </ReviewsSection>
        </ReviewsContainer>
    );
};

export default ReviewsPage;