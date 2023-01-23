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
import {activateScrollTrigger, activateScrollTriggerFromBottom} from "../components/utility/parallax";
import HistorySection from "../components/HistorySection";



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
        activateScrollTriggerFromBottom()
    }, [])

    const chooseScrollDirection = (activeSlide) => {
        switch (activeSlide) {
            case 0: return 'main'
            case 1: return 'about'
            case 2: return 'services2'
            case 3: return 'services'
        }
    }

    function slideScroll(e) {


        //todo: переделать на другую логику
        if(e.pageY < 900) {
            if(e.deltaY > 0) {
                scroller.scrollTo('about', {
                    duration: 1200,
                    smooth: true,
                    offset: -80,
                    ignoreCancelEvents: true
                })
            }
        } else if(e.pageY < 1800) {
            let direction = e.deltaY > 0 ? 'history' : 'main'
            scroller.scrollTo(direction, {
                duration: 1200,
                smooth: true,
                offset: -80,
                ignoreCancelEvents: true
            })
        } else if(e.pageY < 2500) {
            let direction = e.deltaY > 0 ? 'services' : 'about'
            scroller.scrollTo(direction, {
                duration: 1200,
                smooth: true,
                offset: -80,
                ignoreCancelEvents: true
            })
        } else {
            if(e.deltaY < 0) {
                scroller.scrollTo('history', {
                    duration: 1200,
                    smooth: true,
                    offset: -80,
                    ignoreCancelEvents: true
                })
            }
        }
        /*console.log(activeSlide)

        let desirableSlide = activeSlide
        oldSlide = activeSlide
        e.deltaY > 0 ? desirableSlide += 1 : desirableSlide -= 1


        // make sure we're not past the end or beginning slide
        desirableSlide = desirableSlide < 0 ? 0 : desirableSlide
        desirableSlide = desirableSlide > slides.length - 1 ? slides.length - 1 : desirableSlide
        setActiveSlide(desirableSlide)
        if (oldSlide === desirableSlide) {
            return
        }

        scroller.scrollTo(chooseScrollDirection(activeSlide), {
            duration: 1000,
            smooth: true,
            offset: -80,
            ignoreCancelEvents: true
        })*/

        //gsap.to(mainPage.current, dur, { y: offsets[activeSlide], ease:"power2.inOut" })

       /* // if we're dragging we don't animate the container
        if (this.id != "dragger") {
            gsap.to(container, dur, { y: offsets[activeSlide], ease:"power2.inOut", onUpdate:tweenDot });
        }
*/
            // dragging the panels
            /*if (this.id === "dragger") {
                activeSlide = offsets.indexOf(this.endY);
            } else {
                if (gsap.isTweening(container)) {
                    return;
                }
                // up/down arrow clicks
                if (this.id === "downArrow" || this.id === "upArrow") {
                    activeSlide = this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
                    // click on a dot
                } else if (this.className === "dot") {
                    activeSlide = this.index;
                    // scrollwheel
                } else {
                    activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
                }*/
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
          </div>
          {/*<InfoSection {...homeObjThree}/>*/}
          {/*<Footer />*/}
        </MainContainer>
    );

};

export default Index;