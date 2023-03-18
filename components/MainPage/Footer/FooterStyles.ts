import styled from "styled-components";
import Link from "next/link";
import { BsInstagram, BsWhatsapp} from 'react-icons/bs'
import { FaViber } from 'react-icons/fa'


export const FooterContainer = styled.footer`
  position: relative;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #161616;
  //scroll-snap-align: start;
  //scroll-snap-stop: always;
  

  @media screen and (max-width: 768px) {
   
  }

  @media screen and (max-width: 480px) {
    
  }
`
export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const FooterBG = styled.div`
  position: relative;
  min-height: calc(65vh - 40px);
  width: 100%;
  background: url(${({url}) => url}) center / cover no-repeat fixed;
  filter: blur(1.5px);
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, .3);
  }
  
  @media screen and (max-width: 768px) {
    background: url(${({url}) => url}) center / cover no-repeat;
  }

  @media screen and (max-width: 480px),(max-height: 750px) {
    min-height: calc(60vh - 40px);
  }
  @media screen and (max-width: 420px) and (max-height: 750px) {
    min-height: calc(53vh - 40px);
  }
  @media screen and (max-width: 420px) and (max-height: 600px) {
    min-height: calc(48vh - 40px);
  }
`
export const FooterBGContent = styled.div`
  position: absolute;
  min-height: calc(65vh - 40px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  @media screen and (max-width: 480px) {
    min-height: calc(60vh - 40px);
  }
  @media screen and (max-width: 420px) and (max-height: 600px) {
    min-height: calc(48vh - 40px);
  }
`

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  
`
export const FooterContentWrapper = styled.div`

`

export const FooterH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
`


export const FooterH2 = styled.h2`
  color: #fff;
  font-size: 28px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding-bottom: 5px;
  
  @media screen and (max-width: 710px) {
    justify-content: center;
  }
  @media screen and (max-width: 430px) {
    
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
   padding: 10px 12px;
  }
  @media screen and (max-width: 410px) {
   padding: 0; 
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 24px;
  text-align: left;
  color: #fff;
  box-sizing: border-box;

  @media screen and (max-width: 710px),(max-height: 630px) {
    margin: 12px;
  }
  @media screen and (max-width: 480px) {
    margin: auto;
  }
  @media screen and (max-width: 410px){
    align-items: center;
    margin: 5px auto;
  }
  @media screen and (max-width: 420px) and (max-height: 600px) {
    margin: 1px auto;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 16px;
  color: wheat;
  font-weight: bold;

  @media screen and (max-width: 710px) {
    margin-bottom: 5px;
  }
  @media screen and (max-height: 750px) and (max-width: 420px) {
    margin-bottom: 2px;
  }
`
export const FooterP = styled.p`
    width: 190px;
  
  @media screen and (max-width: 480px),(max-height: 750px) and (max-width: 650px) {
    line-height: 17px;
  }
  @media screen and (max-width: 410px) {
    width: 240px;
    line-height: 20px;
    text-align: center;
  }
`

export const FooterLink = styled(Link)`
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  
  span {
    line-height: 14px;
    padding-left: 5px;
  }
  &:hover {
    color: wheat;
    transition: 0.3s ease-out;
  }

  @media screen and (max-height: 750px) and (max-width: 420px) {
    margin-bottom: 0.3rem;
  }
`
export const InstagramIcon = styled(BsInstagram)`
  color: wheat;
`
export const WhatsAppIcon = styled(BsWhatsapp)`
  color: wheat;
`
export const ViberIcon = styled(FaViber)`
  color: wheat;
`
