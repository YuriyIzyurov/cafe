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

    //добавил пикселей, так как почему то в режиме Ф12 откуда-то прибавляется 1пкс и сбивает
    const currentScrollPosition = scrollY + 10;
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

export function isScreenHeightGreaterThan(minHeight, minWidth) {
    const currentHeight = window.innerHeight;
    const currentWidth = window.innerWidth;
    return (currentHeight && currentHeight > minHeight) && (currentWidth && currentWidth > minWidth);
}
