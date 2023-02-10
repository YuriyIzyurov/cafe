import {
    LogoH1,
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem, NavLinkNext, NavLinkNextLogo,
    NavLinksSmooth,
    NavLogo,
    NavMenu
} from "./NavStyles";
import { FaBars } from 'react-icons/fa';
import {FC, useEffect, useState} from "react";
import { useActions } from "../../hooks/useActions";
import { pierre } from "../../styles/fonts/fonts";


type NavbarType = {
    isOutsidePage?:boolean
    isRoomPage?: boolean
    toggle: () => void
}
const Navbar:FC<NavbarType> = ({isOutsidePage, toggle, isRoomPage}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const {activateScrolling} = useActions()

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else setScrollNav(false)
    }

    useEffect(() => {
        if(!isOutsidePage) window.addEventListener('scroll', changeNav)

        return () => {
            if(!isOutsidePage) window.removeEventListener('scroll', changeNav)
        }
    }, [])

    const scrollTo = (target) => {
        activateScrolling(target)
    }


    return (
        <>
           <Nav scrollNav={!isOutsidePage ? scrollNav : true}>
               <NavbarContainer>
                   {isOutsidePage
                       ? <NavLinkNextLogo href='/'>
                           <LogoH1>УКузьмича</LogoH1>
                        </NavLinkNextLogo>
                       : <NavLogo
                            to='main'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                           <LogoH1>УКузьмича</LogoH1>
                        </NavLogo>}


                   <MobileIcon onClick={toggle}>
                        <FaBars/>
                   </MobileIcon>


                   {isOutsidePage
                       ? <NavMenu>
                            <NavItem>
                                <NavLinkNext href='/' onClick={() => scrollTo('about')}>Главная</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext href='/' onClick={() => scrollTo('history')}>О нас</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext href='/' onClick={() => scrollTo('services')}>Услуги</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext href='/' onClick={() => scrollTo('contacts')}>Контакты</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext className={isRoomPage &&'active'} href='/rooms' >Залы</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext className={!isRoomPage &&'active'} href='/menu'>Меню</NavLinkNext>
                            </NavItem>
                        </NavMenu>
                       : <NavMenu>
                            <NavItem>
                           <NavLinksSmooth
                               to='about'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >Главная</NavLinksSmooth>
                       </NavItem>
                            <NavItem>
                           <NavLinksSmooth
                               to='history'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >О нас</NavLinksSmooth>
                       </NavItem>
                            <NavItem>
                           <NavLinksSmooth
                               to='services'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >Услуги</NavLinksSmooth>
                       </NavItem>
                            <NavItem>
                           <NavLinksSmooth
                               to='contacts'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >Контакты</NavLinksSmooth>
                       </NavItem>
                       <NavItem>
                           <NavLinkNext href='rooms'>Залы</NavLinkNext>
                       </NavItem>
                       <NavItem>
                           <NavLinkNext href='menu'>Меню</NavLinkNext>
                       </NavItem>
                   </NavMenu>}
                   {/*<NavBtn>
                       <NavBtnLink href='/signin'>Войти</NavBtnLink>
                   </NavBtn>*/}
               </NavbarContainer>
           </Nav>
        </>
    );
};
export default Navbar;