import MainContainer from "../components/MainContainer";
import {useGetProductsQuery} from "../store/product/product.api";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import HeroSection from "../components/MainPage/HeroSection";
import { homeObjOne} from "../components/MainPage/InfoSection/data";
import {scroller, Events} from 'react-scroll'
import { useScrollBlock } from "../hooks/useScrollBlock";
import dynamic from 'next/dynamic'
import Loading from "../components/Loading";





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

    const [blockScroll, allowScroll] = useScrollBlock()


    let slides
    let offsets = []

    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setVisible] = useState(false)


    useEffect(() => {

        if(mainPage.scrollTo) {
            scroller.scrollTo(mainPage.scrollTo, {
                duration: 800,
                smooth: true,
                offset: -80,
                ignoreCancelEvents: true
            })
            deActivateScrolling()
        }

        window.addEventListener("wheel", slideScroll)
        slides = document.querySelectorAll('section')

        if(!mainPage.scrollTo) {
            Events.scrollEvent.register('begin', () => {
                blockScroll()
            })
            Events.scrollEvent.register('end', () => {
                allowScroll()
            })

        }
        for (let i = 0; i < slides.length; i++) {
            offsets.push(-slides[i].offsetTop)
        }

        if(!isVisible) setVisible(true)

        return () => {
            window.removeEventListener("wheel", slideScroll)
        }
    }, [])


    function slideScroll(e) {

        const heightInPercent = Math.ceil(window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100)

        const pickSection = () => {
            if(heightInPercent < 10 && e.deltaY > 0) return 'about'
            else if(heightInPercent < 30) return e.deltaY > 0 ? 'history' : 'main'
            else if(heightInPercent < 60) return e.deltaY > 0 ? 'services' : 'about'
            else if(heightInPercent < 90) return e.deltaY > 0 ? 'contacts' : 'history'
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
          {isVisible && <DynamicSidebar isOpen={isOpen} toggle={toggle}/>}
          <Navbar toggle={toggle} />
          <>
              <HeroSection />
              <DynamicInfoSection {...homeObjOne}/>
              <DynamicHistorySection />
              <DynamicServicesSection id='services'/>
              <DynamicFooter id='contacts'/>
          </>
        </MainContainer>
    );

};

export default Index;