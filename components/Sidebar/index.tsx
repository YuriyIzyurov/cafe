import React, { FC } from 'react';
import {
    CloseIcon,
    Icon,
    SidebarBtnWrap,
    SidebarContainer,
    SidebarLinkNext,
    SidebarLinkSmooth,
    SidebarLogoWrapper,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper
} from "./SidebarStyles";
import logo from "public/images/logoSpoon.png";
import Image from "next/image";
import { useActions } from '../../hooks/useActions';



//todo:do union type with navbar
type SidebarType = {
    isOutsidePage?:boolean
    isOpen: boolean
    toggle: () => void
}

const Sidebar:FC<SidebarType> = ({isOpen, toggle, isOutsidePage}) => {

    const {activateScrolling} = useActions()

    const scrollTo = (target) => {
        activateScrolling(target)
    }

    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            {!isOutsidePage ?
                <SidebarMenu>
                    <SidebarLinkSmooth to='about'
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact='true'
                                       offset={-80}
                                       onClick={toggle}>
                        Главная
                    </SidebarLinkSmooth>
                    <SidebarLinkSmooth to='history'
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact='true'
                                       offset={-80}
                                       onClick={toggle}>
                        О нас
                    </SidebarLinkSmooth>
                    <SidebarLinkSmooth to='services'
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact='true'
                                       offset={-80}
                                       onClick={toggle}>
                        Услуги
                    </SidebarLinkSmooth>
                    <SidebarLinkSmooth to='contacts'
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact='true'
                                       offset={-80}
                                       onClick={toggle}>
                        Контакты
                    </SidebarLinkSmooth>

                    <SidebarLinkNext href='rooms' onClick={toggle}>Залы</SidebarLinkNext>
                    <SidebarLinkNext href='reviews' onClick={toggle}>Отзывы</SidebarLinkNext>
                    <SidebarLinkNext href='menu' onClick={toggle}>Меню</SidebarLinkNext>
                    <SidebarLogoWrapper>
                        <Image src={logo} style={{opacity: 0.8}} alt='logo'/>
                    </SidebarLogoWrapper>
                </SidebarMenu>
                :
                <SidebarMenu>
                    <SidebarLinkNext href='/' onClick={() => scrollTo('#about')}>Главная</SidebarLinkNext>
                    <SidebarLinkNext href='/' onClick={() => scrollTo('#history')}>О нас</SidebarLinkNext>
                    <SidebarLinkNext href='/' onClick={() => scrollTo('#services')}>Услуги</SidebarLinkNext>
                    <SidebarLinkNext href='/' onClick={() => scrollTo('#contacts')}>Контакты</SidebarLinkNext>
                    <SidebarLinkNext href='rooms' onClick={toggle}>Залы</SidebarLinkNext>
                    <SidebarLinkNext href='reviews' onClick={toggle}>Отзывы</SidebarLinkNext>
                    <SidebarLinkNext href='menu' onClick={toggle}>Меню</SidebarLinkNext>
                    <SidebarLogoWrapper>
                        <Image src={logo} style={{opacity: 0.8}} alt='logo'/>
                    </SidebarLogoWrapper>
                </SidebarMenu>}
        </SidebarContainer>
    );
};

export default Sidebar;