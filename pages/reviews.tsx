import { useQuery } from "@tanstack/react-query";
import { useState} from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import ReviewsPage, {ReviewType} from "../components/ReviewsPage";
import Sidebar from "../components/Sidebar";
import { ReviewService } from "../services/ReviewService";


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
        const reviews: ReviewType[] = await ReviewService.getReviews()
        //const response1 = await fetch('https://jwt-authorization-nest.vercel.app/reviews')

       // const reviews:ReviewType[] = await response1.json()
       // const reviews = [{"_id":"63f62b982f8f5192617e9921","name":"Igor","rating":3,"text":"все понравилось","approved":false,"createdAt":"2023-02-22T14:49:34.154Z","updatedAt":"2023-02-22T14:49:34.154Z","__v":0},{"_id":"63f62dae69bfaea0f85af78d","name":"Дмитрий Сергеевич","rating":5,"text":"Отлично","approved":false,"createdAt":"2023-02-22T14:57:32.305Z","updatedAt":"2023-02-22T14:57:32.305Z","__v":0},{"_id":"63f62f5069bfaea0f85af794","name":"Дмитрий 2","rating":2,"text":"hehehehe","approved":false,"createdAt":"2023-02-22T14:57:32.305Z","updatedAt":"2023-02-22T14:57:32.305Z","__v":0},{"_id":"63f77dc5f637722849fe0ca7","name":"dsfsdf","rating":4,"text":"sdfsdfdsf","approved":false,"createdAt":"2023-02-23T14:28:18.469Z","updatedAt":"2023-02-23T14:28:18.469Z","__v":0},{"_id":"640df9f517831d2d7cd9aeea","name":"dffffdssdfsehy dffsssdethhfgr","rating":3,"text":"sadad","approved":false,"createdAt":"2023-03-12T09:52:10.402Z","updatedAt":"2023-03-12T09:52:10.402Z","__v":0},{"_id":"640dfac217831d2d7cd9aef2","name":"Станислав Вячеславович","rating":4,"text":"ddsfsd","approved":false,"createdAt":"2023-03-12T09:52:10.402Z","updatedAt":"2023-03-12T09:52:10.402Z","__v":0},{"_id":"6415af6140ee834ec227f4e0","name":"Дмитрий 2","rating":2,"text":"hehehehe","approved":false,"createdAt":"2023-03-18T12:21:31.167Z","updatedAt":"2023-03-18T12:21:31.167Z","__v":0},{"_id":"6415afaa40ee834ec227f4e3","name":"Василий Григорьевич","rating":4,"text":"Я посетил кафе недавно и остался доволен своим опытом. Обстановка в кафе была уютной и приятной, обслуживание было быстрым и дружелюбным. Меню предлагало широкий выбор блюд, и я наслаждался своим заказом. Еда была свежей и вкусной, а цены были разумными. Я также оценил чистоту и ухоженность кафе. В целом, я бы порекомендовал это кафе своим друзьям и знакомым и с удовольствием пришел бы сюда еще раз.","approved":false,"createdAt":"2023-03-18T12:21:31.167Z","updatedAt":"2023-03-18T12:21:31.167Z","__v":0},{"_id":"6415b76a188dc8624f670742","name":"АННА ","rating":5,"text":"У Кузьмича - отличное название для кафе! Звучит душевно и домашне. Кажется, что в этом кафе готовят традиционные блюда с любовью и заботой, как делает это хозяин в своей собственной кухне. Название точно передает атмосферу уюта и гостеприимства, которую можно ощутить, посетив это заведение.","approved":false,"createdAt":"2023-03-18T12:49:35.202Z","updatedAt":"2023-03-18T12:49:35.202Z","__v":0},{"_id":"6415d8977e27822f52d6bf46","name":"mmmmmbb","rating":4,"text":"jxxxxxx","approved":false,"createdAt":"2023-03-18T15:27:07.135Z","updatedAt":"2023-03-18T15:27:07.135Z","__v":0}]

        return {
            props: {reviews}, revalidate: 10};

    } catch (e) {
        console.log("Невозможно загрузить отзывы", e)
        return {notFound: true};
    }
}
