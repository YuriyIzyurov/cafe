import {Button, ButtonRoute } from "./ButtonElement";
import { ArrowForward, ArrowRight } from "./MainPage/HeroSection/HeroSectionStyles";
import {useState} from "react";


const MainButton = () => {
    const [hover, setHover] = useState(false)


    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ButtonRoute
            href='tel:28‑55-07'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
        >
            <Button>
                Заказать столик {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
        </ButtonRoute>
    );
};

export default MainButton;