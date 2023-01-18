import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from "./NavStyles";
import { FaBars } from 'react-icons/fa';
import {useEffect, useState} from "react";
import {animateScroll as scroll} from 'react-scroll'


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else setScrollNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
           <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                   <NavLogo href='/' onClick={toggleHome}>
                       <img src="images/logo.png" alt="логотип"/>
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                        <FaBars/>
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks
                               to='about'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >Главная</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks
                               to='discover'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >О нас</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks
                               to='services'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >Услуги</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks
                               to='rooms'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >Залы</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks
                               to='reviews'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >Меню</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks
                               to='contacts'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                           >Контакты</NavLinks>
                       </NavItem>
                   </NavMenu>
                   {/*<NavBtn>
                       <NavBtnLink href='/signin'>Войти</NavBtnLink>
                   </NavBtn>*/}
               </NavbarContainer>
           </Nav>
        </>
    );
};
export default Navbar;