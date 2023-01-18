import React from 'react';
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>О нас</FooterLinkTitle>
                            <FooterLink href='signin'>Где мы</FooterLink>
                            <FooterLink href='signin'>Фотоальбом</FooterLink>
                            <FooterLink href='signin'>Руководство</FooterLink>
                            <FooterLink href='signin'>Предложения</FooterLink>
                            <FooterLink href='signin'>Ссылка на соцсети</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>О нас</FooterLinkTitle>
                            <FooterLink href='signin'>Где мы</FooterLink>
                            <FooterLink href='signin'>Фотоальбом</FooterLink>
                            <FooterLink href='signin'>Руководство</FooterLink>
                            <FooterLink href='signin'>Предложения</FooterLink>
                            <FooterLink href='signin'>Ссылка на соцсети</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>О нас</FooterLinkTitle>
                            <FooterLink href='signin'>Где мы</FooterLink>
                            <FooterLink href='signin'>Фотоальбом</FooterLink>
                            <FooterLink href='signin'>Руководство</FooterLink>
                            <FooterLink href='signin'>Предложения</FooterLink>
                            <FooterLink href='signin'>Ссылка на соцсети</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>О нас</FooterLinkTitle>
                            <FooterLink href='signin'>Где мы</FooterLink>
                            <FooterLink href='signin'>Фотоальбом</FooterLink>
                            <FooterLink href='signin'>Руководство</FooterLink>
                            <FooterLink href='signin'>Предложения</FooterLink>
                            <FooterLink href='signin'>Ссылка на соцсети</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;