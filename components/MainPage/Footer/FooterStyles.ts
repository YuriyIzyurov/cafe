import styled from "styled-components";
import Link from "next/link";
import { BsInstagram} from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'
import { MdAlternateEmail } from 'react-icons/md'


export const FooterContainer = styled.footer`
  background-color: #161616;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  

  @media screen and (max-width: 768px) {
   
  }

  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`

export const FooterBG = styled.div`
  position: relative;
  height: 550px;
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

  @media screen and (max-width: 480px) {
    height: 320px;
  }
`
export const FooterBG2 = styled.div`
  position: absolute;
  height: 550px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  @media screen and (max-width: 480px) {
    height: 320px;
  }
`

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding-top: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 60px;
    padding-top: 0;
  }
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
  align-items: center;
  width: 100%;
  
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
  @media screen and (max-width: 430px) {
    flex-direction: row;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 190px;
  color: #fff;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    margin: 8px;
  }
  @media screen and (max-width: 430px) {
    align-items: center;
    padding: 0;
    width: 100%;
    margin-bottom: 10px;
  }
  
`

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 16px;
  color: wheat;
  font-weight: bold;
`
export const FooterP = styled.p`
  
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
`
export const InstagramIcon = styled(BsInstagram)`
  color: wheat;
`
export const VkIcon = styled(SlSocialVkontakte)`
  color: wheat;
`
export const Mail = styled(MdAlternateEmail)`
  color: wheat;
`
