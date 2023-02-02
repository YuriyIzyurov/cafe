import React, {useEffect, useRef, useState} from 'react';
import {Button, ButtonRoute, ButtonSmoothScroll} from '../../ButtonElement';
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



const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, primary, img, alt}) => {


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
                                    <ButtonRoute href='/menu'>
                                        <Button>
                                            {buttonLabel}
                                        </Button>
                                    </ButtonRoute>
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