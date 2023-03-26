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
export const findCurrentSectionIndex = (refs: RefObject<HTMLElement>[], scrollY: number) => {
    const currentScrollPosition = scrollY;
    const scrollPositions = refs.map((section, index) => {
        const el = section.current
        return el ? (index === 0 ? el.offsetTop : el.offsetTop - 80) : Infinity;
    });
    for (let i = 0; i < scrollPositions.length; i++) {
        if (currentScrollPosition < scrollPositions[i]) {
            return i - 1;
        }
    }

    return refs.length - 1;
};

export function isScreenHeightGreaterThan(minHeight) {
    const currentHeight = document.documentElement.clientHeight;
    return currentHeight && currentHeight > minHeight;
}

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