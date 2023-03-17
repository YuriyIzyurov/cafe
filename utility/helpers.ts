import {RefObject} from "react";

export  const getPromisesOfElements = (refs: RefObject<HTMLElement>[]): Promise<RefObject<HTMLElement>>[] => {
    return refs.map((ref: RefObject<HTMLElement>) => {
        if (ref.current) {
            return Promise.resolve(ref);
        } else {
            return new Promise<RefObject<HTMLElement>>((resolve) => {
                const intervalId = setInterval(() => {
                    if (ref.current) {
                        clearInterval(intervalId);
                        resolve(ref);
                    }
                }, 50);
            });
        }
    });
};
export  const scrollToSection = (section: RefObject<HTMLElement>): void => {
    if (section) {
        gsap.to(window, {
            duration: 0.5,
            scrollTo: {
                y: section.current,
                offsetY: 80,
            },
            onStart: () => console.log('start'),
            onComplete: () => console.log('end'),
        });
    }
};