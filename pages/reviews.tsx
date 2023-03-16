import { useQuery } from "@tanstack/react-query";
import { useState} from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import ReviewsPage, {ReviewType} from "../components/ReviewsPage";
import Sidebar from "../components/Sidebar";


const Services = ({reviews}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const closeSidebar = () => {
        if(isOpen) setIsOpen(!isOpen)
    }

    return (
        <MainContainer keywords={'отзывы'}>
            <Sidebar isOutsidePage isOpen={isOpen} toggle={toggle}/>
            <Navbar isOutsidePage toggle={toggle} isReviewsPage/>
            <ReviewsPage closeSidebar={closeSidebar} reviews={reviews}/>
        </MainContainer>
    );
};

export default Services;

export async function getStaticProps(context) {

    try {
        //const reviews: ReviewType[] = await ReviewService.getReviews()
        const response1 = await fetch('https://jwt-authorization-nest.vercel.app/reviews')

        const reviews:ReviewType[] = await response1.json()

        return {
            props: {reviews}, revalidate: 10};

    } catch (e) {
        console.log("Невозможно загрузить отзывы", e)
        return {notFound: true};
    }
}
