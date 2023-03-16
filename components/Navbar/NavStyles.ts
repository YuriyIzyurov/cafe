import styled from "styled-components";
import Link from "next/link";
import {Link as LinkScroll} from 'react-scroll'


export const Nav = styled.nav`
  background: ${({scrollNav }) => (scrollNav ? '#161616' : 'transparent')};
  transition: background-color 0.3s ease;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 320px) {
    padding: 0 5px;
  }
`

export const NavLogo = styled(LinkScroll)`
  cursor: pointer;

  @media screen and (max-width: 320px),(max-height: 750px) and (max-width: 650px) {
    display: flex;
  }
`
export const LogoH1 = styled.h1`
  padding:  3px 24px 0 0;
  font-size: 43px;
  font-weight: 100;
  cursor: pointer;
  font-family: var(--font-caligraphic);
  background-color: antiquewhite;
  background-image: linear-gradient(180deg, #5b4428, antiquewhite);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media screen and (max-width: 320px),(max-height: 750px) and (max-width: 650px) {
    padding: 0;
    font-size: 31px;
    margin: auto;
  }
  
`
export const NavLinkNextLogo = styled(Link)`
  cursor: pointer;
`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.div`
  height: 80px;
  padding: ${({last}) => !last ? '0 1rem' : '0 0 0 1rem'};
  cursor: pointer;
  white-space: nowrap;

  @media screen and (max-width: 1000px) {
    padding: ${({last}) => !last ? '0 0.6rem' : '0 0 0 0.6rem'};
  }
  @media screen and (max-width: 920px) {
    padding: ${({last}) => !last ? '0 0.5rem' : '0 0 0 0.5rem'};
    font-size: 0.9em;
  }
  @media screen and (max-width: 855px) {
    padding: ${({last}) => !last ? '0 0.3rem' : '0 0 0 0.3rem'};
    font-size: 0.8em;
  }
`

export const NavLinksSmooth = styled(LinkScroll)`
  color: #a2917c;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    border-bottom: 3px solid #a2917c;
    color: #fff;
  }
`

export const NavLinkNext = styled(Link)`
  color: #a2917c;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    border-bottom: 3px solid #a2917c;
    color: #fff;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  //text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
