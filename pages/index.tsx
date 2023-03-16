import MainContainer from "../components/MainContainer";
import {useGetProductsQuery} from "../store/product/product.api";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Navbar from "../components/Navbar";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import HeroSection from "../components/MainPage/HeroSection";
import { homeObjOne} from "../components/MainPage/InfoSection/data";
import {scroller, Events} from 'react-scroll'
import { useScrollBlock } from "../hooks/useScrollBlock";
import {gsap} from "gsap";
import dynamic from 'next/dynamic'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
import {animation} from "../utility/parallax";
import { useWindowHeight } from "../utility/deviceChecker";
import InfoSection from "../components/MainPage/InfoSection";
import HistorySection from "../components/MainPage/HistorySection";
import Services from "../components/MainPage/Services";
import useSwipe from "../utility/scrollLogic";
import Footer from "../components/MainPage/Footer";




const DynamicFooter = dynamic(() => import("../components/MainPage/Footer"), {
    //loading: () => <Loading/>,
    ssr:false
})
const DynamicSidebar = dynamic(() => import("../components/Sidebar"), {
    //loading: () => <Loading/>,
    ssr:false
})
const DynamicHistorySection = dynamic(() => import("../components/MainPage/HistorySection"), {
   // loading: () => <Loading/>,
    ssr:false
})
const DynamicServicesSection = dynamic(() => import("../components/MainPage/Services"), {
    //loading: () => <Loading/>,
    ssr:false
})
const DynamicInfoSection = dynamic(() => import("../components/MainPage/InfoSection"), {
   // loading: () => <Loading/>,
    ssr:false
})



const Index = () => {

    const { data, isLoading, error} = useGetProductsQuery(6) //получаем данные с сервера
    const {addItem} = useActions() //используем экшены
    const {cart} = useTypedSelector(state => state) //доступ к стейту

    //автоскролл после перехода из другой страницы на эту
    const {mainPage} = useTypedSelector(state => state)
    const {deActivateScrolling} = useActions()

    //отслеживание свайпов
   // const [swipeDirection, touchEndY] = useSwipe()

    const ref1 = useRef(null)


    const [blockScroll, allowScroll] = useScrollBlock()
    let windowHeight = useWindowHeight()


    let slides
    let offsets = []

    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setVisible] = useState(false)
    const [masterTL, setMasterTL] = useState(null)

   /* useEffect(() => {
            const mainPageScrollTo: HTMLElement = document.getElementById('#contacts')
            gsap.to(window, {
                duration: 0.5,
                scrollTo: {
                    y: mainPageScrollTo,
                    offsetY: 80,
                }
            });
    },[])*/

    //активация плавного авто скроллера
    useEffect(() => {
        if(mainPage.scrollTo) {
            //todo: элемент не успевает загрузиться без делай изза динамик импорта
                gsap.to(window, {
                    delay: 0.5,
                    duration: 0.5,
                    scrollTo: {
                        y: mainPage.scrollTo,
                        offsetY: 80,
                    },
                    onStart: () => console.log('start'),
                    onComplete: () => console.log('end')
                });
            deActivateScrolling()
        }

        //слушатели событий на колесико мыши и свайп
        window.addEventListener("wheel", slideScroll)

        slides = document.querySelectorAll('section')

        for (let i = 0; i < slides.length; i++) {
            offsets.push(-slides[i].offsetTop)
        }

        if(!isVisible) setVisible(true)

        return () => {
            window.removeEventListener("wheel", slideScroll)
        }
    }, [])

    //создание мастер анимации страницы и ее удалении при анмаунте
    useLayoutEffect(() => {
        const mm = gsap.matchMedia();
        mm.add(
            {
                isSmall: '(max-height: 600px)',
                isMedium: '(max-height: 800px)',
                isLarge: '(min-height: 801px)',
            },
            (c) => {
                ScrollTrigger.defaults({
                    scrub: c.conditions.isSmall ? true : c.conditions.isMedium ? 0.8 : 1.3,
                })
                const tl = gsap.timeline()
                /*const smoothScroll = smoothScrolling()
                tl.add(smoothScroll)*/
                setMasterTL(tl)
            }
        );
        return () =>  mm.revert()
    }, []);



    function slideScroll(e) {
        //функция отвечает за плавный авто скролл в нужную сторону, а также следит за размерами окна
        const currentHeight = document.documentElement.clientHeight
        const heightInPercent = Math.ceil(window.scrollY / (document.documentElement.scrollHeight - currentHeight) * 100)


        const pickSection = () => {
            if(heightInPercent < 10 && e.deltaY > 0) return '#about'
            else if(heightInPercent < 30) return e.deltaY > 0 ? '#history' : '#main'
            else if(heightInPercent < 60) return e.deltaY > 0 ? '#services' : '#about'
            else if(heightInPercent < 90) return e.deltaY > 0 ? '#contacts' : '#history'
            else if(e.deltaY < 0) return '#services'
        }

        if(currentHeight && currentHeight > 480)
        gsap.to(window, {
            duration: 1.2,
            scrollTo: {
                y: pickSection(),
                offsetY: 80
            },
            onStart: blockScroll,
            onComplete: allowScroll,
        });
    }

    const toggle = () => setIsOpen(!isOpen)
    const closeSidebar = () => {
        if(isOpen) setIsOpen(!isOpen)
    }



    return (
        <MainContainer>
          {isVisible && <DynamicSidebar isOpen={isOpen} toggle={toggle}/>}
          <Navbar toggle={toggle} />
          <div onClick={closeSidebar}>
              <HeroSection />
              {/*стандартая подгрузка компонентов*/}
               {/* <InfoSection timeline={masterTL} {...homeObjOne}/>
              <HistorySection timeline={masterTL}/>
              <Services timeline={masterTL}/>
              <Footer id='contacts'/>*/}

              {/*//todo:динамическая подгрузка компонентов плохо стыкуется с анимацей, когда быстрый скролл, анимация будто не успевает установиться*/}
              <DynamicInfoSection timeline={masterTL} {...homeObjOne}/>
              <DynamicHistorySection timeline={masterTL}/>
              <DynamicServicesSection timeline={masterTL}/>
              <DynamicFooter id='contacts' />
          </div>
        </MainContainer>
    );

};

export default Index;