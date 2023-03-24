import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const HeroContainer = styled.section`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  scroll-snap-align: start;
 
  
  
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
    z-index: 2;
  }
  
  @media screen and (min-width: 320px) {
    :after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, #161616, transparent);
      z-index: 100;
    }
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 450px) {
    padding: 0 12px;
  }
  @media screen and (max-width: 380px) and (max-height: 520px) {
    top: 80px;
  }
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px),(max-height: 700px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media screen and (max-width: 350px) {
    font-size: 28px;
    line-height: 30px;
  }
  
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  backdrop-filter: blur(3px);
  
  
  @media screen and (max-width: 480px),(max-height: 700px) {
    font-size: 18px;
  }
  @media screen and (max-width: 410px) and (max-height: 600px) {
    margin-top: 12px;
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (max-width: 350px) {
    margin-top: 10px;
    font-size: 16px;
    line-height: 20px;
  }
`


export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-height: 520px) {
    margin-top: 12px;
  }
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`