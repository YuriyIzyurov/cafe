import {Button, ButtonRoute} from '../../ButtonElement';
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    OffsetBottom,
    TextWrapper,
} from './InfoSectionStyles';
import Image from 'next/image'
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {animation} from "../../../utility/parallax";
import {isMobileDevice} from "../../../utility/deviceChecker";
import ImagesComponent from "./ImagesComponent";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger)



const InfoSection = ({lightBg, lightText, headline, buttonLabel, alt, timeline,sectionRef}) => {


    useLayoutEffect(() => {

        let mm
        if(window.innerWidth > 768 && timeline) {
            mm = gsap.matchMedia();
            mm.add(
                {
                    isDesktop: '(min-width: 481px)',
                    isMobile: '(max-width: 480px)',
                },
                (c) => {
                    const anim = animation('main', c.conditions.isMobile)
                    //добавляем анимацию компонента в мастер анимацию страницы
                    timeline && timeline.add(anim)
                }
            );
        }

        return () => mm && mm.revert()
    }, [timeline])


    return (
        <>
            <InfoContainer ref={sectionRef} lightBg={lightBg} id='about'>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <BtnWrap>
                                    <ButtonRoute href='/menu'>
                                        <Button>
                                            {buttonLabel}
                                        </Button>
                                    </ButtonRoute>
                                    {/*<button onClick={() => console.log(timeline)}>off animation</button>*/}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <ImagesComponent alt={alt}/>
                        {/*{isMobileDevice()
                            ? <Image src='/images/mobile-dish2.png' width={350} height={257}  alt={alt}/>
                            : <ImagesComponent alt={alt}/>}*/}
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;