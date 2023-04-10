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
import mainImg from "public/images/photo_bg/main2.jpg";
import MainButton from "../../MainButton";
import {MAIN_PAGE_TEXT} from "../../../utility/constants";


const HeroSection = ({sectionRef}) => {
    
    return (
        <HeroContainer ref={sectionRef} id='main'>
            <HeroBg>
                <Image src={mainImg}  alt='main' fill placeholder="blur" style={{objectFit:"cover"}}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Идеальное место для семейного отдыха</HeroH1>
                <HeroP>
                    {MAIN_PAGE_TEXT}
                </HeroP>
                <HeroBtnWrapper>
                    <MainButton/>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;