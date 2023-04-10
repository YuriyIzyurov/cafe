import React, {useEffect, useState} from 'react';
import {
    ContentWrapper,
    FooterBG, FooterBGContent,
    FooterContainer, FooterContentWrapper, FooterH1,
    FooterH2,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle, FooterP,
    FooterWrap, InstagramIcon, ViberIcon, WhatsAppIcon
} from "./FooterStyles";
import footer2 from '../../../public/images/footer2.jpg'
import {ArrowForward, ArrowRight, HeroBtnWrapper} from "../HeroSection/HeroSectionStyles";
import {Button, ButtonRoute} from "../../ButtonElement";
import {LogoH1, NavLogo} from "../../Navbar/NavStyles";
import MainButton from "../../../components/MainButton";
import footerBG from "public/images/photo_bg/footer2.jpg";
import Image from "next/image";
import {FOOTER_ADDRESS, INSTAGRAM_HREF, LOGO_NAME, VIBER_HREF, WHATSAPP_HREF} from '../../../utility/constants';


const Footer = ({id,sectionRef}) => {


    return (
        <FooterContainer ref={sectionRef} id={id} >
            <FooterBG>
                <Image src={footerBG}  alt='footerImg' fill placeholder="blur" style={{objectFit:"cover"}}/>
            </FooterBG>
            <FooterBGContent>
                <FooterContentWrapper>
                    <FooterH2>Бронирование</FooterH2>
                    <FooterH1>Закажи себе столик</FooterH1>
                    <HeroBtnWrapper>
                        <MainButton/>
                    </HeroBtnWrapper>
                </FooterContentWrapper>
            </FooterBGContent>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems marginRight>
                            <FooterLinkTitle>Где мы находимся</FooterLinkTitle>
                            <FooterP>
                                {FOOTER_ADDRESS}
                            </FooterP>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Социальные сети</FooterLinkTitle>
                            <FooterLink href={INSTAGRAM_HREF}>
                                <InstagramIcon/><span>Инстаграм</span>
                            </FooterLink>
                            <FooterLink href={WHATSAPP_HREF}>
                               <WhatsAppIcon/><span>Написать в WhatsApp</span>
                            </FooterLink>
                            <FooterLink title="Должен быть установлен Viber для ПК" href={VIBER_HREF}>
                                <ViberIcon/><span>Написать в Viber</span>
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <NavLogo to='main' >
                        <LogoH1>{LOGO_NAME}</LogoH1>
                    </NavLogo>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;