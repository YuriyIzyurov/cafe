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
import {findCurrentSectionIndex, getPromisesOfElements, isScreenHeightGreaterThan} from "../utility/helpers";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

type Direction = 'up' | 'down'
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
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    const touchRef = useRef(null)

    //ссылки на секции, порядок [main, about, history, services, contacts]
    const refs: RefObject<HTMLElement>[]
        = Array.from({ length: 5 }).map(() => useRef(null))



    //активация плавного авто скроллера
    useEffect(() => {
        let timer: NodeJS.Timeout = null
        let isScrolling = false
        let scrollDirection: Direction | null = null
        let prevScrollPos = window.scrollY
        let startMovePos = null

        const handleScroll = (e) => {

            if (!isScrolling) {
                const currentScrollPos = window.scrollY
                if (currentScrollPos > prevScrollPos) {
                    scrollDirection = "down"
                } else if (currentScrollPos < prevScrollPos) {
                    scrollDirection = "up"
                }
                isScrolling = true
            }

            clearTimeout(timer);

            timer = setTimeout(() => {
                isScrolling = false
                timer = null
                scrollDirection = null
                prevScrollPos = window.scrollY
                touchRef.current.style.touchAction = ''
                refs[3].current.style.touchAction = ''
            }, 100)
        }
        const handleTouchEnd = () => {
            if(isScrolling) {
                touchRef.current.style.touchAction = 'none'
                refs[3].current.style.touchAction = 'none'
            }
        }
        function handleTouchMove(e) {
            if (!startMovePos) {
                startMovePos = e.changedTouches[0].clientY;
            }
            if (startMovePos) {
                const currentMovePos = e.changedTouches[0].clientY;
                const swipeDirection = currentMovePos > startMovePos ? "down" : "up";

/*
                if (swipeDirection === "up" && scrollDirection === "up") {

                } else if (swipeDirection === "down" && scrollDirection === "down") {

                }*/

                startMovePos = currentMovePos;
            }
            /*if(!startMovePos) {
                startMovePos = e.changedTouches[0].clientY
            }
            if(startMovePos) {
                const currentMovePos = e.changedTouches[0].clientY
                const swipeDirection = currentMovePos > startMovePos ? "down" : "up"

                if (swipeDirection === "up" && scrollDirection === "up") {
                    e.preventDefault()
                } else if (swipeDirection === "down" && scrollDirection === "down") {
                    e.preventDefault()
                }

                startMovePos = currentMovePos
            }*/
        }


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


        //слушатели событий на колесико мыши, и скролл
        window.addEventListener("wheel", slideScroll)
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('touchmove', handleTouchMove,{passive: false})
        window.addEventListener('touchend', handleTouchEnd)


        if(!isVisible) setVisible(true)

        return () => {
            window.removeEventListener("wheel", slideScroll)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('touchend', handleTouchEnd)
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
                    scrub: c.conditions.isSmall  ? true : (c.conditions.isMedium || c.conditions.isMobile) ? 0.85  : 1.3,
                })

                const tl = gsap.timeline()
                setMasterTL(tl)
            }
        );
        return () =>  mm.revert()
    }, []);


    //функции обработчики событий скролла и свайпа

    function slideScroll(e:Event, startY?: number):void {
        const isTouchEvent = e.type === 'touchend';
        const isWheelEvent = e.type === 'wheel' || e.type === 'mousewheel';

        const pickSection = (currentIndex:number, nextIndex:number): HTMLElement => {
            if (nextIndex < 0 || nextIndex >= refs.length) {
                return refs[currentIndex].current;
            }
            return refs[nextIndex].current;
        };

        if (isTouchEvent) {
            const touchEvent = e as TouchEvent;

            if (isScreenHeightGreaterThan(480)) {
                const lastTouch = touchEvent.changedTouches[0].pageY
                const currentSectionIndex = findCurrentSectionIndex(refs, lastTouch);
                const nextSectionIndex = startY > lastTouch ? currentSectionIndex + 1 : currentSectionIndex - 1;
                const section = pickSection(currentSectionIndex,nextSectionIndex)
                scrollToSection(section,0.8);
            }
        } else if (isWheelEvent) {
            const wheelEvent = e as WheelEvent;
            if (isScreenHeightGreaterThan(480)) {
                const currentSectionIndex = findCurrentSectionIndex(refs, window.scrollY);
                const nextSectionIndex = wheelEvent.deltaY > 0 ? currentSectionIndex + 1 : currentSectionIndex - 1;
                const section = pickSection(currentSectionIndex,nextSectionIndex)
                scrollToSection(section, 1.2);
            }
        }
    }


    function scrollToSection(section: HTMLElement, speed: number) {
        gsap.to(window, {
            duration: speed,
            scrollTo: {
                y: section,
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
          <div onClick={closeSidebar} ref={touchRef}>
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