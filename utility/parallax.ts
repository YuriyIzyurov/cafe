import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger)


export const registerMainComponentAnim = () => {

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 70%",
                end: "top top",
                scrub: true
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "center bottom",
                end: "top top",
                scrub: true
            }
        })
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "bottom bottom",
                end: "bottom top",
                scrub: true
            }
        })


        tl1.from("#solt",  { y: 100 }, 0)
            .from("#spoon", { y:  150,  }, 0)
            .from("#salad2",   { y:  100,   }, 0)
            .from("#dish",   { y:  150, rotation: -45, }, 0)
        tl2.from("#pepper", { y: 150 }, 0)
            .from("#salad",   { y:  100 }, 0)
            .from("#tomatos",   { y:  250 }, 0)
        tl3.to("#solt",  { y: -100 }, 0)
            .to("#spoon", { y:  -150,  }, 0)
            .to("#salad2",   { y:  -100,   }, 0)
            .to("#dish",   { y:  -150, rotation: 45, }, 0)
            .to("#pepper", { y: -150 }, 0)
            .to("#salad",   { y:  -100 }, 0)
            .to("#tomatos",   { y:  -250 }, 0)

        tl1.add(tl2).add(tl3)
}

export const registerHistoryComponentAnim = () => {

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#history",
                start: "center bottom",
                end: "top top",
                scrub: true
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#history",
                start: "bottom bottom",
                end: "bottom top",
                scrub: true
            }
        })

        tl1.from("#smoke", { y: 40 }, 0)
            .from("#tea",   { y:  50 }, 0)
            .from("#branch",   { y:  100 }, 0)
        tl2.to("#smoke", { y: -40 }, 0)
            .to("#tea",   { y:  -50 }, 0)
            .to("#branch",   { y:  890, x: -40, rotation: 360 }, 0)

        tl1.add(tl2)
}

export const registerServicesComponentAnim = () => {

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#services",
                start: "20% bottom",
                end: "top top",
                scrub: true
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#services",
                start: "bottom bottom",
                end: "bottom top",
                scrub: true
            }
        })

        tl1.from("#flour", { y:  100 }, 0)
        tl2.to("#flour", { y:  -100 }, 0)
        tl2.to("#branch", { y: 790 }, 0)

        tl1.add(tl2)
}

export const activateMenuAnimation = () => {


    const sections = [
        {name: "#section0", images: ["#salad", "#tomatos", "#flourwrap", "#flour"], start:["15% top","top top","top top"], end:["bottom top","15% top","35% top"]},
        {name: "#section1", images: ["#soup", "#branch", "#flour2wrap", "#flour2", "#flour4wrap", "#flour4"], start:["top top","top 30%","top center", "15% top"], end:["bottom top","15% top","top top","35% top"]},
        {name: "#section2", images: ["#potatos", "#pepper", "#flour3wrap", "#flour3"], start:["top center","top center","top center"], end:["top top","top top","top top"]}
    ]
    const drinks = ["#whisky", "#vine", "#beer", "#tea"]

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



        tl1.from(section.images[0],  { rotation: 45 }, 0)
        tl2.from(section.images[1], { y: 50, ease: "power1.out" }, 0)
        tl3.from(section.images[2], {yPercent: -100, opacity: 0.3}, 0 )
        tl3.from(section.images[3], {yPercent: 100}, 0 )
        tl4.from(section.images[4], {yPercent: -100, opacity: 0}, 0 )
        tl4.from(section.images[5], {yPercent: 100}, 0 )


        return masterTimeLine.add(tl1).add(tl2).add(tl3)
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

}


