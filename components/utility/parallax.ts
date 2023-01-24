import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger)


export const activateScrollTrigger = () => {

    //about container animation
        gsap.timeline({
        ease: 'expo.inOut',
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
            end: "top top",
            scrub: true
        }
    })
        .from("#solt",  { y: 100 }, 0)
        .from("#spoon", { y:  150,  }, 0)
        .from("#salad2",   { y:  100,   }, 0)
        .from("#dish",   { y:  150, rotation: -45, }, 0)

    gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "center bottom",
            end: "top top",
            scrub: true
        }
    })
        .from("#pepper", { y: 150 }, 0)
        .from("#salad",   { y:  100 }, 0)
        .from("#tomatos",   { y:  250 }, 0)

    //history container animation
    gsap.timeline({
        scrollTrigger: {
            trigger: "#history",
            start: "center bottom",
            end: "top top",
            scrub: true
        }
    })
        .from("#smoke", { y: 30 }, 0)
        .from("#tea",   { y:  40 }, 0)
        .from("#branch",   { y:  100 }, 0)
}

export const activateScrollTriggerFromBottom = () => {
    //about container animation
    gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "bottom bottom",
            end: "bottom top",
            scrub: true
        }
    })
        .to("#solt",  { y: -100 }, 0)
        .to("#spoon", { y:  -150,  }, 0)
        .to("#salad2",   { y:  -100,   }, 0)
        .to("#dish",   { y:  -150, rotation: 45, }, 0)
        .to("#pepper", { y: -150 }, 0)
        .to("#salad",   { y:  -100 }, 0)
        .to("#tomatos",   { y:  -250 }, 0)

    //history container animation
    gsap.timeline({
        scrollTrigger: {
            trigger: "#history",
            start: "bottom bottom",
            end: "bottom top",
            scrub: true
        }
    })
        .to("#smoke", { y: -30 }, 0)
        .to("#tea",   { y:  -40 }, 0)
        .to("#branch",   { y:  850, x: -20, rotation: 180 }, 0)
}

