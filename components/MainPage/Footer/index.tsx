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


const Footer = ({id,sectionRef}) => {


    return (
        <FooterContainer ref={sectionRef} id={id} >
            <FooterBG url='images/footer2.jpg'/>
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
                                Подгорная ул.7, Иваново
                                тел. 8-915-828-55-07
                                ежедневно, 12:00–0:00
                            </FooterP>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Социальные сети</FooterLinkTitle>
                            <FooterLink href='https://www.instagram.com/cafe_ykuzmicha/'>
                                <InstagramIcon/><span>Инстаграм</span>
                            </FooterLink>
                            <FooterLink href='https://wa.me/79158285507'>
                               <WhatsAppIcon/><span>Написать в WhatsApp</span>
                            </FooterLink>
                            <FooterLink title="Должен быть установлен Viber для ПК" href="viber://chat?number=%2B79158285507">
                                <ViberIcon/><span>Написать в Viber</span>
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <NavLogo to='main' >
                        <LogoH1>УКузьмича</LogoH1>
                    </NavLogo>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;