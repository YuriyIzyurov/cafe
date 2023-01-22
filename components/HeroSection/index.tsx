import { useState } from "react";
import {Button} from "../ButtonElement";
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    ImgBg
} from "./HeroSectionStyles";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='main'>
            <HeroBg>
                <ImgBg src='images/main2.jpg' alt='main'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Идеальное место для семейного отдыха</HeroH1>
                <HeroP>
                    Кафе "У Кузьмича" - идеальное решение для спокойного
                    семейного отдыха, встреч с друзьями, коллегами,близкими
                    людьми или просто для комфортного времяпрепровождения за чашечкой кофе.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='false'
                    >
                        Заказать столик {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;