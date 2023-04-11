import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import Link from "next/link";
import {Link as LinkScroll} from 'react-scroll'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 60%;
  height: 100%;
  background: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  right: ${({isOpen}) => (isOpen ? '0%' : '-100%')};
  box-shadow: -2px 0 8px 3px #00000082;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  //outline: none;

  @media screen and (max-width: 768px) {
    top: .3rem;
    right: .3rem;
    font-size: 1.6rem;
  }
`

export const SidebarWrapper = styled.div`
  
`

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 480px) {
    //grid-template-rows: repeat(8, 40px);
  }
`

export const SidebarLinkSmooth = styled(LinkScroll)`
  color: #a2917c;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  padding: 10px 0;
  
  &:hover {
    color: #fff;
  }
`
export const SidebarLinkNext = styled(Link)`
  color: #a2917c;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  padding: 10px 0;
  
  &:hover {
    color: #fff;
  }
`
export const SidebarLogoWrapper =styled.div`
  display: flex;
  justify-content: center;
  padding: 18px 0;
`
export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(Link)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  //outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  //text-decoration: none;
  
  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`