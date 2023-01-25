import MainContainer from "../components/MainContainer";
import {useGetProductsQuery} from "../store/product/product.api";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {useEffect, useRef, useState} from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/data";
import Services from "../components/Services";
import {gsap} from "gsap";
import {scroller} from 'react-scroll'
import { useInView } from 'react-intersection-observer';
import {activateScrollTrigger} from "../components/utility/parallax";
import HistorySection from "../components/HistorySection";
import Footer from "../components/Footer";



const Index = () => {

    const { data, isLoading, error} = useGetProductsQuery(6) //получаем данные с сервера
    const {addItem} = useActions() //используем экшены
    const {cart} = useTypedSelector(state => state) //доступ к стейту

    let oldSlide = 0
    let dur = 0.6
    let slides
    let offsets = []

    const [isOpen, setIsOpen] = useState(false)
    let mainPage = useRef(null)


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

    //тест сайт
    return (
        <MainContainer>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <div ref={mainPage} >
              <HeroSection />
              <InfoSection {...homeObjOne}/>
              <HistorySection />
              <Services id='services'/>
              <Footer id='contacts'/>
          </div>
          {/*<InfoSection {...homeObjThree}/>*/}
        </MainContainer>
    );

};

export default Index;