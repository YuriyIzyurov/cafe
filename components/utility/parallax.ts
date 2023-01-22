import {gsap} from "gsap";
import {scroller} from 'react-scroll'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger)

/*ScrollTrigger.create({
    trigger: "#about",
    start: "top bottom",
    end: "top top",
    scrub: true,
    onToggle: self => console.log("toggled, isActive:", self.isActive),
    onUpdate: self => {
        console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    }
})*/

export const activateScrollTrigger = () => {
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
}

export const activateScrollTriggerFromBottom = () => {
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

    /*gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "bottom 80%",
            end: "bottom top",
            scrub: true
        }
    })
        */
}

/*
scroller.scrollTo('about', {
    duration: 5000,
    smooth: true,
    offset: -80,
    ignoreCancelEvents: true
})*/
