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
import {FC, memo, useEffect, useState} from "react";
import { useActions } from "../../hooks/useActions";
import { IUser } from "../../services/auth.service";
import {getAccessToken} from "../../utility/auth.helper";
import UserProfile from "./UserProfile";



type NavbarType = {
    isOutsidePage?:boolean
    isRoomPage?: boolean
    isReviewsPage?: boolean
    toggle: () => void
    closeModal?: () => void
    currentProfile? : IUser | null
}
const Navbar:FC<NavbarType> = memo(({isOutsidePage, toggle, isRoomPage, isReviewsPage, currentProfile}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const {activateScrolling, checkAuth} = useActions()


    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else setScrollNav(false)
    }

    useEffect(() => {
        if(!currentProfile && getAccessToken()) {
            checkAuth()
        }
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
                       ? (!currentProfile
                           ?
                           <NavLinkNextLogo href='/'>
                               <LogoH1>УКузьмича</LogoH1>
                           </NavLinkNextLogo>
                           :
                           <UserProfile name={currentProfile.username}/>)
                       : (!currentProfile
                           ?
                           <NavLogo
                            to='main'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >
                           <LogoH1>УКузьмича</LogoH1>
                        </NavLogo>
                           :
                           <UserProfile name={currentProfile.username}/>)}

                   <MobileIcon onClick={toggle}>
                        <FaBars/>
                   </MobileIcon>

                   {isOutsidePage
                       ? <NavMenu>
                            <NavItem>
                                <NavLinkNext href='/' onClick={() => scrollTo('#about')}>Главная</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext href='/' onClick={() => scrollTo('#history')}>О нас</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext href='/' onClick={() => scrollTo('#services')}>Услуги</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext href='/' onClick={() => scrollTo('#contacts')}>Контакты</NavLinkNext>
                            </NavItem>
                            <NavItem>
                                <NavLinkNext className={isRoomPage &&'active'} href='/rooms' >Залы</NavLinkNext>
                            </NavItem>
                           <NavItem>
                               <NavLinkNext className={isReviewsPage &&'active'} href='/reviews' >Отзывы</NavLinkNext>
                           </NavItem>
                            <NavItem last>
                                <NavLinkNext className={!isRoomPage && !isReviewsPage &&'active'} href='/menu'>Меню</NavLinkNext>
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
                            <NavLinkNext href='reviews'>Отзывы</NavLinkNext>
                       </NavItem>
                       <NavItem last>
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
})
export default Navbar;