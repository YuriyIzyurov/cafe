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
import {scroller, Events} from 'react-scroll'
import {activateScrollTrigger} from "../utility/parallax";
import HistorySection from "../components/MainPage/HistorySection";
import Footer from "../components/MainPage/Footer";
import { useScrollBlock } from "../hooks/useScrollBlock";



const Index = () => {

    const { data, isLoading, error} = useGetProductsQuery(6) //получаем данные с сервера
    const {addItem} = useActions() //используем экшены
    const {cart} = useTypedSelector(state => state) //доступ к стейту

    const [blockScroll, allowScroll] = useScrollBlock()


    let slides
    let offsets = []

    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        window.addEventListener("wheel", slideScroll)
        slides = document.querySelectorAll('section')

        Events.scrollEvent.register('begin', () => {
            blockScroll()
        })
        Events.scrollEvent.register('end', () => {
            allowScroll()
        })
        for (let i = 0; i < slides.length; i++) {
            offsets.push(-slides[i].offsetTop)
        }
        activateScrollTrigger()

        return () => {
            window.removeEventListener("wheel", slideScroll)
        }
    }, [])


    function slideScroll(e) {
        //todo: переделать на другую логику

        const pickSection = () => {
            if(e.pageY < 900 && e.deltaY > 0) return 'about'
            else if(e.pageY < 1800) return e.deltaY > 0 ? 'history' : 'main'
            else if(e.pageY < 2500) return e.deltaY > 0 ? 'services' : 'about'
            else if(e.pageY < 3400) return e.deltaY > 0 ? 'contacts' : 'history'
            else if(e.deltaY < 0) return 'services'
        }

        scroller.scrollTo(pickSection(), {
            duration: 1200,
            smooth: true,
            offset: -80,
            ignoreCancelEvents: true
        })
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