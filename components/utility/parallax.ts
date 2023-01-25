import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger)


export const activateScrollTrigger = () => {
    //master animation
    const master = gsap.timeline()
    master.add(animateAboutContainer())
        .add(animateHistoryContainer())
        .add(animateServicesContainer())

    //about container animation
    function animateAboutContainer() {
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

        return tl1.add(tl2).add(tl3)
    }

    //history container animation
    function animateHistoryContainer() {
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

        return tl1.add(tl2)
    }

    //services container animation
    function animateServicesContainer() {
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

        return tl1.add(tl2)
    }
}


