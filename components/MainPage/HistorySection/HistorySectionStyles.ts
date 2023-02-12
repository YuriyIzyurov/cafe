import styled from "styled-components";
import Link from "next/link";
import { HiArrowNarrowRight, HiChevronRight } from 'react-icons/hi'
import css from "styled-jsx/css";

export const HistoryContainer = styled.section`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#161616')};
  
  @media screen and (max-width: 768px) {
    
  }
`

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;

  
`
export const HistoryBlock = styled.div`
  position: relative;
  display: grid;
  //display: flex;
  grid-template-columns: ${({reverse = false, mini = false}) => 
          reverse ? (mini ? '60% 40%' :'55% 45%') : (mini ? '40% 60%' : '45% 55%')};
  background-color: #fff;
  z-index: 1;
  box-shadow: 2px 2px 8px black;


  @media screen and (max-width: 768px) {
     ${({mini}) => !mini && css`
      display: flex;
      flex-direction: column; 
     `};
  }
`
export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({padding}) => `${padding[0]}px ` + `${padding[1]}px`};

  @media screen and (max-width: 900px) {
    padding: ${({padding}) => `${padding[0]/2}px ` + `${padding[1]/2}px`};
  }
  @media screen and (max-width: 768px) {
    max-width: ${({mini}) => !mini && '500px'};
  }
  @media screen and (max-width: 630px) {
    padding: ${({padding}) => `${padding[0]/3}px ` + `${padding[1]/3}px`};      
  }
  @media screen and (max-width: 560px) {
    padding: ${({padding}) => `${padding[0]/4}px ` + `${padding[1]/4}px`};
  }
`
export const HistoryImgWrapper = styled.div`
  position: relative;
  //width: 100%;
  
  @media screen and (max-width: 1400px) {
    //height: 400px;
  }
  @media screen and (max-width: 768px) {
    height: 400px;
  }
  @media screen and (max-width: 560px) {
    height: 250px;
  }
`
export const HistoryH2 = styled.h2`
  font-family: var(--font-caligraphic);
  color: rgba(152,108,53,0.85);
  font-weight: 100;
  font-size: ${({fontSize = '40px'}) => fontSize};
  line-height: ${({fontSize = '50px'}) => fontSize};;
`
export const HistoryH1 = styled.h1`
  color: #161616;
  font-size: ${({fontSize = '34px'}) => fontSize};
  line-height: ${({fontSize = '34px'}) => fontSize};
     
  @media screen and (max-width: 630px) {
    font-size: ${({fontSize }) => fontSize === '28px' && '22px'};    
  }
  @media screen and (max-width: 560px) {
    font-size: ${({fontSize }) => fontSize === '28px' && '20px'};    
  }
  @media screen and (max-width: 480px) {
    line-height: ${({fontSize }) => fontSize === '28px' && '22px'};
  }   
`
export const HistoryP = styled.p`
  color: #161616;
  font-size: 14px;
  line-height: 20px;
  padding: 20px 0;
`
export const HistoryLink = styled(Link)`
  color: rgba(152,108,53,0.85);
  font-weight: 700;
  max-width: 140px;
  display: flex;
  align-items: center;
  span {
    line-height: 33px;
    padding-right: 2px;
  }
`
export const HistoryImgWrap = styled.div`
  position: absolute;
  top: -182px;
  left: 40px;
  z-index: -1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HistoryImgWrap2 = styled.div`
  position: absolute;
  bottom: -30%;
  left: 17%;
  z-index: -1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HistoryImgWrap3 = styled.div`
  position: absolute;
  bottom: -85px;
  right: -66px;
  z-index: 3;

  @media screen and (max-width: 1400px) {
    right: -33px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ArrowRight = styled(HiArrowNarrowRight)`
    font-size: 22px;
`
export const ArrowRightSmall = styled(HiChevronRight)`
  font-size: 22px;
`




