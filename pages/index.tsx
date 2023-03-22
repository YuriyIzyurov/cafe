import MainContainer from "../components/MainContainer";
import {useGetProductsQuery} from "../store/product/product.api";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Navbar from "../components/Navbar";
import {RefObject, useEffect, useLayoutEffect, useRef, useState} from "react";
import HeroSection from "../components/MainPage/HeroSection";
import { homeObjOne} from "../components/MainPage/InfoSection/data";
import {scroller, Events} from 'react-scroll'
import { useScrollBlock } from "../hooks/useScrollBlock";
import {gsap} from "gsap";
import dynamic from 'next/dynamic'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';
import {DynamicFooter, DynamicHistorySection, DynamicInfoSection, DynamicServicesSection, DynamicSidebar } from "../components/dynamicComponents";
import {findCurrentSectionIndex, getPromisesOfElements} from "../utility/helpers";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)



const Index = () => {

    const { data, isLoading, error} = useGetProductsQuery(6) //получаем данные с сервера
    const {addItem} = useActions() //используем экшены
    const {cart} = useTypedSelector(state => state) //доступ к стейту

    //автоскролл после перехода из другой страницы на эту
    const {mainPage} = useTypedSelector(state => state)
    const {deActivateScrolling} = useActions()

    //отслеживание свайпов
   // const [swipeDirection, touchEndY] = useSwipe()

    //блокируем скролл во время анимаций
    const [blockScroll, allowScroll] = useScrollBlock()

    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setVisible] = useState(false)
    const [masterTL, setMasterTL] = useState(null)

    //ссылки на секции, порядок [main, about, history, services, contacts]
    const refs: RefObject<HTMLElement>[]
        = Array.from({ length: 5 }).map(() => useRef(null));


    //активация плавного авто скроллера
    useEffect(() => {
        if(mainPage.scrollTo) {
            const promises: Promise<RefObject<HTMLElement>>[] = getPromisesOfElements(refs)
            Promise.all(promises).then((sections) => {
                const section = sections.find((section) => {
                    return section.current?.id === mainPage.scrollTo.replace('#', '')
                })
                gsap.to(window, {
                    duration: 0.5,
                    scrollTo: {
                        y: section.current,
                        offsetY: 80,
                    },
                    onStart: blockScroll,
                    onComplete: allowScroll,
                })
                deActivateScrolling()
            });
        }


        //слушатели событий на колесико мыши и свайп
        window.addEventListener("wheel", slideScroll)


        if(!isVisible) setVisible(true)

        return () => {
            window.removeEventListener("wheel", slideScroll)
        }
    }, [])

    //создание мастер анимации страницы и ее удалении при анмаунте
    useEffect(() => {

        const mm = gsap.matchMedia();
        mm.add(
            {
                isSmall: '(max-height: 600px)',
                isMedium: '(max-height: 800px)',
                isLarge: '(min-height: 801px)',
                isMobile: '(max-width: 768px)',
            },
            (c) => {
                ScrollTrigger.defaults({
                    scrub: (c.conditions.isSmall || c.conditions.isMobile)  ? true : c.conditions.isMedium ? 0.8 : 1.3,
                })

                const tl = gsap.timeline()
                setMasterTL(tl)
            }
        );
        return () =>  mm.revert()
    }, []);

    function slideScroll(e) {


        const pickSection = () => {
            const currentSectionIndex = findCurrentSectionIndex(refs);
            const nextSectionIndex = e.deltaY > 0 ? currentSectionIndex + 1 : currentSectionIndex - 1;

            if (nextSectionIndex < 0 || nextSectionIndex >= refs.length) {
                return refs[currentSectionIndex].current;
            }

            return refs[nextSectionIndex].current;
        };

        const currentHeight = document.documentElement.clientHeight;
        if (currentHeight && currentHeight > 480) {
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
              <HeroSection sectionRef={refs[0]}/>
              {/*стандартая подгрузка компонентов*/}
              {/*  <InfoSection timeline={masterTL} {...homeObjOne}/>
              <HistorySection timeline={masterTL}/>
              <Services timeline={masterTL}/>
              <Footer id='contacts'/>*/}

              {/*//todo:динамическая подгрузка компонентов плохо стыкуется с анимацей, когда быстрый скролл, анимация будто не успевает установиться*/}
              <DynamicInfoSection sectionRef={refs[1]} timeline={masterTL} {...homeObjOne}/>
              <DynamicHistorySection sectionRef={refs[2]} timeline={masterTL}/>
              <DynamicServicesSection sectionRef={refs[3]} timeline={masterTL}/>
              <DynamicFooter sectionRef={refs[4]} id='contacts' />
          </div>
        </MainContainer>
    );

};



export default Index;