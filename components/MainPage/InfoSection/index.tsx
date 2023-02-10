import {Button, ButtonRoute} from '../../ButtonElement';
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
} from './InfoSectionStyles';
import Image from 'next/image'
import {useEffect} from "react";
import {registerMainComponentAnim} from "../../../utility/parallax";




const InfoSection = ({lightBg, id, imgStart, lightText, headline, darkText, description, buttonLabel, img, alt}) => {

    useEffect(() => {
        registerMainComponentAnim()
    }, [])

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
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
                        <Column2>
                            <ImgWrap3 id='solt'>
                                <Image src='/images/solt-resized.png' width={175} height={267}  alt={alt}/>
                            </ImgWrap3>
                            <ImgWrap6 id='spoon'>
                                <Image src='/images/spoon-resized.png' width={192} height={407}  alt={alt}/>
                            </ImgWrap6>
                            <ImgWrap4 id='pepper'>
                                <Image src='/images/pepper-resized.png' width={230} height={224}  alt={alt}/>
                            </ImgWrap4>
                            <ImgWrap2 id='salad'>
                                <Image src='/images/salad-resized.png' width={232} height={177}  alt={alt}/>
                            </ImgWrap2>
                            <ImgWrap7 id='salad2'>
                                <Image src='/images/salad2-resized.png' width={250} height={371}  alt={alt}/>
                            </ImgWrap7>
                            <ImgWrap5 id='tomatos'>
                                <Image src='/images/tomatos-resized.png' width={250} height={250}  alt={alt}/>
                            </ImgWrap5>
                            <ImgWrap>
                                <Image id='dish' src='/images/animated-dish-test2.png' width={660} height={525}  alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;