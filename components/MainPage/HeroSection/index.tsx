import {useEffect, useState} from "react";
import { Button, ButtonRoute } from "../../ButtonElement";
import Image from 'next/image'

import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
} from "./HeroSectionStyles";
import mainImg from "public/images/main2.jpg";
import MainButton from "../../MainButton";


const HeroSection = ({sectionRef}) => {
    
    return (
        <HeroContainer ref={sectionRef} id='main'>
            <HeroBg>
                <Image src={mainImg}  alt='main' fill placeholder="blur" style={{objectFit:"cover"}}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Идеальное место для семейного отдыха</HeroH1>
                <HeroP>
                    Кафе "У Кузьмича" - идеальное решение для спокойного
                    семейного отдыха, встреч с друзьями, коллегами,близкими
                    людьми или просто для комфортного времяпрепровождения за чашечкой кофе.
                </HeroP>
                <HeroBtnWrapper>
                    <MainButton/>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;