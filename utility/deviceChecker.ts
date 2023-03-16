import {useEffect, useState} from "react";


export const isMobileDevice = ():boolean => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}

export function useWindowHeight(): SizesType {

    const [windowHeight, setWindowHeight] = useState(undefined);


    useEffect(() => {

        let currentHeight = window.innerHeight

        function handleResize() {
            if(Math.abs(currentHeight - window.innerHeight) > 50) {
                currentHeight = window.innerHeight
                setWindowHeight(window.innerHeight)
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return windowHeight;
}

type SizesType = {
    width: number
    height: number
}