import React, {useState} from 'react';
import {
    FooterBG, FooterBG2,
    FooterContainer, FooterContentWrapper, FooterH1,
    FooterH2,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle, FooterP,
    FooterWrap
} from "./FooterStyles";
import {ArrowForward, ArrowRight, HeroBtnWrapper, ImgBg} from "../HeroSection/HeroSectionStyles";
import {Button, ButtonRoute} from "../../ButtonElement";
import {NavLogo} from "../../Navbar/NavStyles";

const Footer = ({id}) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <FooterContainer id={id}>
            <FooterBG url="images/footer2.png"/>
            <FooterBG2>
                <FooterContentWrapper>
                    <FooterH2>Бронирование</FooterH2>
                    <FooterH1>Закажи себе столик</FooterH1>
                    <HeroBtnWrapper>
                        <ButtonRoute
                            href='tel:28‑55-07'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                        >
                            <Button>
                                Заказать столик {hover ? <ArrowForward/> : <ArrowRight/>}
                            </Button>
                        </ButtonRoute>
                    </HeroBtnWrapper>
                </FooterContentWrapper>
            </FooterBG2>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Где мы находимся</FooterLinkTitle>
                            <FooterP>
                                Подгорная ул.7, Иваново
                                8-915-828-55-07, 28‑55-07
                                ежедневно, 12:00–0:00
                            </FooterP>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Социальные сети</FooterLinkTitle>
                            <FooterLink href='signin'>Инстаграм</FooterLink>
                            <FooterLink href='signin'>Группа вк</FooterLink>
                            <FooterLink href='signin'>Эл. почта</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <NavLogo to='main' >
                        <img src="images/logo.png" alt="логотип"/>
                    </NavLogo>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;