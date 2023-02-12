import {Button, ButtonRoute} from '../../ButtonElement';
import {
    Additional110px,
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
} from './InfoSectionStyles';
import Image from 'next/image'
import {useEffect} from "react";
import {registerMainComponentAnim} from "../../../utility/parallax";
import {isMobileDevice} from "../../../utility/deviceChecker";
import ImagesComponent from "./ImagesComponent";




const InfoSection = ({lightBg, id, imgStart, lightText, headline, darkText, description, buttonLabel, img, alt}) => {

    useEffect(() => {
        if(!isMobileDevice()) registerMainComponentAnim()
    }, [])

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
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
                        {isMobileDevice()
                            ? <Image src='/images/mobile-dish2.png' width={350} height={257}  alt={alt}/>
                            : <ImagesComponent alt={alt}/>}
                        <Additional110px/>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;