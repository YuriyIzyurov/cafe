import MainContainer from "../components/MainContainer";
import s from "../styles/main.module.scss"
import {useGetProductsQuery} from "../store/product/product.api";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {useState} from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/data";
import Services from "../components/Services";
import Footer from "../components/Footer";


const Index = () => {

    const { data, isLoading, error} = useGetProductsQuery(6) //получаем данные с сервера
    const {addItem} = useActions() //используем экшены
    const {cart} = useTypedSelector(state => state) //доступ к стейту

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    //тест сайт
    return (
        <MainContainer>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <HeroSection/>
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services/>
          {/*<InfoSection {...homeObjThree}/>*/}
          {/*<Footer />*/}
        </MainContainer>
    );

};

export default Index;