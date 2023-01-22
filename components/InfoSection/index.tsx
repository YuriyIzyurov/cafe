import React, {useEffect, useRef, useState} from 'react';
import { Button } from '../ButtonElement';
import {
    BtnWrap,
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap, ImgWrap2, ImgWrap3, ImgWrap4,
    ImgWrap5, ImgWrap6, ImgWrap7,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine
} from './InfoSectionStyles';
import {useInView} from "react-intersection-observer";
import {scroller, Events} from 'react-scroll'
import { gsap } from "gsap";

import { activateScrollTrigger } from '../utility/parallax';



const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, primary, img, alt}) => {

   /* const dish = useRef(null)
    const solt = useRef(null)
    const spoon = useRef(null)
    const pepper = useRef(null)
    const salad = useRef(null)
    const salad2 = useRef(null)
    const tomatos = useRef(null)*/

   // const [isParallaxActive, setParallaxActive] = useState(true)




    useEffect(() => {



       /* Events.scrollEvent.register('begin', function () {
            setParallaxActive(false)
        });
        Events.scrollEvent.register('end', function () {
            setParallaxActive(true)
        });

        activateScrollTrigger()
*/
    }, [])


    /*useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "center bottom",
                end: "top top",
                scrub: true
            }
        })
            .from("#solt",  { y: -400 }, 0)
            .from("#spoon", { y:  450 }, 0)
            .from("#pepper", { y: 170 }, 0)
            .from("#salad",   { y:  350 }, 0)
            .from("#salad2",   { y:  350 }, 0)
            .from("#tomatos",   { y:  350 }, 0)
    }, [])*/

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                {/*<TopLine>{topLine}</TopLine>*/}
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        to='/'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap3 id='solt'>
                                <Img src='images/solt-resized.png'  alt={alt}/>
                            </ImgWrap3>
                            <ImgWrap6 id='spoon'>
                                <Img src='images/spoon-resized.png'  alt={alt}/>
                            </ImgWrap6>
                            <ImgWrap4 id='pepper'>
                                <Img src='images/pepper-resized.png'  alt={alt}/>
                            </ImgWrap4>
                            <ImgWrap2 id='salad'>
                                <Img src='images/salad-resized.png'  alt={alt}/>
                            </ImgWrap2>
                            <ImgWrap7 id='salad2'>
                                <Img src='images/salad2-resized.png'  alt={alt}/>
                            </ImgWrap7>
                            <ImgWrap5 id='tomatos'>
                                <Img src='images/tomatos-resized.png'  alt={alt}/>
                            </ImgWrap5>
                            <ImgWrap >
                                <Img src={img}  id='dish' alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;