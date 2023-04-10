import {useMutation, useQuery } from "@tanstack/react-query";
import React, {useCallback, useState} from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import ReviewsPage, {ReviewDataType, ReviewType} from "../components/ReviewsPage";
import Sidebar from "../components/Sidebar";
import ModalWindow from "../components/ModalWindow";
import { ReviewService } from "../services/review.service";
import FullReview from "../components/ReviewsPage/FullReview";
import LoginForm from "../components/LoginForm";
import {useTypedSelector} from "../hooks/useTypedSelector";



const Services = ({reviews}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [reviewData, setReviewData] = useState<null|ReviewDataType>(null)

    const {user} = useTypedSelector(state => state)

    //todo: использовать для динамической смены даты на сервере
  /*  const {mutate} = useMutation(['toggle deletion'], () => UserService.toggleDelete(reviews),
        {
            onSuccess() {
                invalidateQueries(['get profile'])
            }
        })*/

    const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

    const closeSidebar = useCallback(() => {
        if (isOpen) setIsOpen(false)
    }, [isOpen])

    const getReviewData = useCallback((reviewData: ReviewDataType) => {
        setReviewData(reviewData)
        setModalIsOpen(!modalIsOpen)
    }, [])

    const closeModal = () => {
        if(modalIsOpen) {
            setModalIsOpen(!modalIsOpen)
            setReviewData(null)
        }
    }

    const goToLoginForm = useCallback(() => {
        setModalIsOpen(!modalIsOpen);
    },[])

    return (
        <MainContainer keywords={'отзывы'}>
            <ModalWindow modalIsOpen={modalIsOpen}>
                {reviewData ?
                    <FullReview reviewData={reviewData} closeModal={closeModal}/>
                    : <LoginForm closeModal={closeModal}/>}
            </ModalWindow>

            <Sidebar isOutsidePage isOpen={isOpen} toggle={toggle}/>
            <Navbar isOutsidePage toggle={toggle} isReviewsPage currentProfile={user.user}/>
            <ReviewsPage
                closeSidebar={closeSidebar}
                reviews={reviews}
                goToLoginForm={goToLoginForm}
                currentProfile={user.user}
                getReviewData={getReviewData}/>
        </MainContainer>
    );
};

export default Services;

export async function getStaticProps(context) {

    try {
        const reviews: ReviewType[] = await ReviewService.getReviews()

        return {
            props: {reviews}, revalidate: 10};

    } catch (e) {
        console.log("Невозможно загрузить отзывы", e)
        return {notFound: true};
    }
}
