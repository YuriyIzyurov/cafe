import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)



type SectionType = 'main' | 'history' | 'services'
type Position = {y: number | string, x?: number, rotation?: string | number}

interface AnimatedElement {
    id: string
    moveFrom: Position[]
    moveTo: Position[]
}

export const animation = (section: SectionType, isMobile?: boolean) => {
    switch (section) {
        case "main": return registerMainComponentAnim(isMobile)
        case "history": return registerHistoryComponentAnim()
        case "services": return registerServicesComponentAnim()
    }
}

function registerMainComponentAnim(isMobile:boolean){
    const animatedMainImg: AnimatedElement[] = [
        {
            id: "#solt",
            moveFrom: [{y:350}, {y:0}],
            moveTo: [{y:0}, {y:isMobile ? -300 : -650}],
        },
        {
            id: "#spoon",
            moveFrom: [{y:isMobile ? 1400 : 450}, {y:0}],
            moveTo: [{y:0}, {y:isMobile ? -300 : -650}],
        },
        {
            id: "#salad2",
            moveFrom: [{y: 300}, {y:0}],
            moveTo: [{y:0}, {y:isMobile ? -250 : -700}],
        },
        {
            id: "#dish",
            moveFrom: [{y:isMobile ? 900 : 600, rotation: isMobile ? -180 :-120}, {y:0, rotation:0}],
            moveTo: [{y:0, rotation:0}, {y:isMobile ? -200 : -500, rotation: isMobile ? 100: 130}],
        },
        {
            id: "#pepper",
            moveFrom: [{y:isMobile ? 2100 : 650}, {y:0}],
            moveTo: [{y:0}, {y:isMobile ? -170 : -440}],
        },
        {
            id: "#salad",
            moveFrom: [{y: isMobile ? 1600 : 250}, {y:0}],
            moveTo: [{y:0}, {y:isMobile ? -180 : -470}],
        },
        {
            id: "#tomatos",
            moveFrom: [{y:isMobile ? 2400 : 700}, {y:0}],
            moveTo: [{y:0}, {y:isMobile ? -150 : -400}],
        },]
    const tlFromTop = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: isMobile ? "top 60%" : "top 90%",
            end: isMobile ? "top 10%" : "top 20%",
        }
    })
    const tlFromBottom = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "bottom 90%",
            end: "bottom 20%",
        }
    })

    setAnimation(animatedMainImg, tlFromTop, tlFromBottom)

    return tlFromTop.add(tlFromBottom)
}
function registerHistoryComponentAnim(){
        const animatedHistoryImg: AnimatedElement[] = [
        {
            id: "#smoke",
            moveFrom: [{y:150}, {y:0}],
            moveTo: [{y:0}, {y:-150}],
        },
        {
            id: "#tea",
            moveFrom: [{y:280}, {y:0}],
            moveTo: [{y:0}, {y:-50}],
        },
        {
            id: "#branch",
            moveFrom: [{y:350}, {y:0}],
            moveTo: [{y:0}, {
                y: calculateY("history"),
                x: -20,
                rotation: 360
            }],
        }]
        const tlFromTop = gsap.timeline({
            scrollTrigger: {
                trigger: "#history",
                start: "top 90%",
                end: "top 30%",
            }
        })
        const tlFromBottom = gsap.timeline({
            scrollTrigger: {
                trigger: "#history",
                start: "bottom 90%",
                end: "bottom 10%",
            }
        })


        setAnimation(animatedHistoryImg, tlFromTop, tlFromBottom)

        return tlFromTop.add(tlFromBottom)
}
function registerServicesComponentAnim(){
        const animatedServicesImg: AnimatedElement[] = [
        {
            id: "#flour",
            moveFrom: [{y:100}, {y:0}],
            moveTo: [{y:0}, {y:-100}],
        },
        {
            id: "#branch",
            moveFrom: [null, {y: calculateY("history")}],
            moveTo: [null, {y:'-=150'}],
        }]
        const tlFromTop = gsap.timeline({
            scrollTrigger: {
                trigger: "#services",
                start: "top 90%",
                end: "top 20%"
            }
        })
        const tlFromBottom = gsap.timeline({
            scrollTrigger: {
                trigger: "#services",
                start: "bottom 90%",
                end: "bottom 20%"
            }
        })


        tlFromTop.fromTo(animatedServicesImg[0].id, animatedServicesImg[0].moveFrom[0], animatedServicesImg[0].moveTo[0], 0)
        animatedServicesImg.forEach(e => tlFromBottom.fromTo(e.id, e.moveFrom[1], e.moveTo[1],0))

        return tlFromTop.add(tlFromBottom)
}

export function activateMenuAnimation(isSmall:boolean){


    const sections = [
        {
            name: "#section0",
            images: ["#salad", "#tomatos", "#flourwrap", "#flour", "#mobile-flourwrap", "#mobile-flour"],
            start:["15% top",`${isSmall ? "top 10%" : "top top"}`, `${isSmall ? "35% top" : "top 30%"}` , "top top"],
            end:["bottom top","15% top",`${isSmall ? "70% top" : "top top"}`, "35% top"]},
        {
            name: "#section1",
            images: ["#soup", "#branch", "#flour2wrap", "#flour2", "#flour4wrap", "#flour4"],
            start:[`${isSmall ? "top center" : "top top"}`,`${isSmall ? "top 80%" : "top 30%"}`,`${isSmall ? "top 60%" : "top center"}`, `${isSmall ? "top 30%" : "15% top"}`],
            end:[`${isSmall ? "15% top" : "bottom top"}`,`${isSmall ? "top 40%" : "15% top"}`,`${isSmall ? "top 30%" : "top top"}`,`${isSmall ? "top top" : "35% top"}`]
        },
        {
            name: "#section2",
            images: ["#potatos", "#pepper", "#flour3wrap", "#flour3","#mobile-flour3wrap", "#mobile-flour3"],
            start:[`${isSmall ? "top 60%" : "top center"}`,`${isSmall ? "top 80%" : "top center"}`,`${isSmall ? "top 60%" : "top center"}`,"top 80%"],
            end:[`${isSmall ? "15% top" : "top top"}`,`${isSmall ? "top 40%" : "top top"}`,`${isSmall ? "top 40%" : "top top"}`,"top 60%"]}
    ]
    const drinks = ["#vodka", "#liquor", "#whisky", "#vinered", "#vine", "#beer", "#tea", "#limonade" ]


    const masterTimeLine = gsap.timeline()

    //animate main menu
    sections.forEach((section) => {
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: section.name,
                start: section.start[0],
                end: section.end[0],
                scrub: 0.5
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: section.name,
                start: section.start[1],
                end: section.end[1],
                scrub: 0.5,
            }
        })
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: section.name,
                start: section.start[2],
                end: section.end[2],
                scrub: 0.5,
            }
        })
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: section.name,
                start: section.start[3],
                end: section.end[3],
                scrub: 0.5,
            }
        })


        //анимация тарелки и прилежащего блюда
        tl1.from(section.images[0],  { rotation: 45 }, 0)
        tl2.from(section.images[1], { y: 50, ease: "power1.out" }, 0)
        //анимация муки основной
        tl3.from(section.images[2], {yPercent: -100, opacity: 0}, 0 )
        tl3.from(section.images[3], {yPercent: 100}, 0 )
        //анимация муки дополнительной
        tl4.from(section.images[4], {yPercent: -100, opacity: 0}, 0 )
        tl4.from(section.images[5], {yPercent: 100}, 0 )


        return masterTimeLine.add(tl1).add(tl2).add(tl3).add(tl4)
    })

    //animate bar menu
    drinks.forEach((img) => {
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "top center",
                scrub: 0.5
            }
        })

        tl1.from(img, {opacity: 0, scale: 0.9, y: 100}, 0)

        return masterTimeLine.add(tl1)
    })

    //animate additional menu
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '#additionalMenuSection',
            start: "top bottom",
            end: "top 40%",
            scrub: 0.5,

        }
    })
    tl1.from('#smoke1', {y: 100, scale: isSmall ? 1 : 1.05, ease: "power1.easeInOut"}, 0)
    tl1.from('#pig', {
        x: isSmall ? -20 : -50,
        scale: isSmall ? 1 : 1.2,
        ease: "power1.easeInOut"
    }, 0)
    tl1.from('#fish', { x: isSmall ? 20 : 50, scale: isSmall ? 1 : 1.2, ease: "power1.easeInOut"}, 0)


    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '#additionalMenuSection',
            start: "top 60%",
            end: "top 30%",
            scrub: 0.5,
        }
    })
    tl2.from('#smoke2', {y: 30, scale: isSmall ? 1 : 1.1, ease: "power1.out"}, 0)
    tl2.from('#pig2', {
        x: isSmall ? 20 : 50,
        y: isSmall ? 20 : 50,
        scale: isSmall ? 1 : 1.2,
        ease: "power1.out"
    }, 0)
    tl2.from('#fish2', {
        x: isSmall ? -20 : -50,
        y: isSmall ? 20 : 50,
        scale: isSmall ? 1 : 1.2,
        ease: "power1.out"
    }, 0)


    masterTimeLine.add(tl1).add(tl2)
    //tl1.from('#smoke1', {y: 100, x: 100, scale: 1.2}, 0)
}

function setAnimation(elements: AnimatedElement[], timelineFromTop: gsap.core.Timeline, timelineFromBottom: gsap.core.Timeline) {
    elements.forEach(e => timelineFromTop.fromTo(e.id, e.moveFrom[0], e.moveTo[0], 0))
    elements.forEach(e => timelineFromBottom.fromTo(e.id, e.moveFrom[1], e.moveTo[1],0))
}
function calculateY(section) {
    if(document.getElementById(section))
    return document.getElementById(section).clientHeight - 60
}


