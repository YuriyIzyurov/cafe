import MainContainer from "../components/MainContainer";
import {useGetProductsQuery} from "../store/product/product.api";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {useEffect, useRef, useState} from "react";
import HeroSection from "../components/MainPage/HeroSection";
import InfoSection from "../components/MainPage/InfoSection";
import { homeObjOne} from "../components/MainPage/InfoSection/data";
import Services from "../components/MainPage/Services";
import {scroller, Element} from 'react-scroll'
import {activateScrollTrigger} from "../utility/parallax";
import HistorySection from "../components/MainPage/HistorySection";
import Footer from "../components/MainPage/Footer";



const Index = () => {

    const { data, isLoading, error} = useGetProductsQuery(6) //получаем данные с сервера
    const {addItem} = useActions() //используем экшены
    const {cart} = useTypedSelector(state => state) //доступ к стейту

    let slides
    let offsets = []

    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        window.addEventListener("wheel", slideScroll)
        slides = document.querySelectorAll('section')

        for (let i = 0; i < slides.length; i++) {
            offsets.push(-slides[i].offsetTop)
        }
        activateScrollTrigger()
    }, [])


    function slideScroll(e) {
        console.log(e.pageY)
        //todo: переделать на другую логику
        if(e.pageY < 900) {
            //main page
            if(e.deltaY > 0) {
                scroller.scrollTo('about', {
                    duration: 1200,
                    smooth: true,
                    offset: -80,
                    ignoreCancelEvents: true
                })
            }
        } else if(e.pageY < 1800) {
            //about page
            let direction = e.deltaY > 0 ? 'history' : 'main'
            scroller.scrollTo(direction, {
                duration: 1200,
                smooth: true,
                offset: -80,
                ignoreCancelEvents: true
            })
        } else if(e.pageY < 2500) {
            //history page
            let direction = e.deltaY > 0 ? 'services' : 'about'
            scroller.scrollTo(direction, {
                duration: 1200,
                smooth: true,
                offset: -80,
                ignoreCancelEvents: true
            })
        } else if(e.pageY < 3400){
            //services page
            let direction = e.deltaY > 0 ? 'contacts' : 'history'
            scroller.scrollTo(direction, {
                duration: 1200,
                smooth: true,
                offset: -80,
                ignoreCancelEvents: true
                })
        } else {
            //contacts page
            if(e.deltaY < 0) {
                scroller.scrollTo('services', {
                    duration: 1200,
                    smooth: true,
                    offset: -80,
                    ignoreCancelEvents: true
                })
            }
        }
    }
    const toggle = () => setIsOpen(!isOpen)

    return (
        <MainContainer>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <>
              <HeroSection />
              <InfoSection {...homeObjOne}/>
              <HistorySection />
              <Services id='services'/>
              <Footer id='contacts'/>
          </>
        </MainContainer>
    );

};

export default Index;