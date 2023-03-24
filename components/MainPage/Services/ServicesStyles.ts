import styled from "styled-components";
import { MdLocalPhone,MdPhoneInTalk,MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import css from "styled-jsx/css";

export const ServicesContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background: #161616;
  scroll-snap-align: start;
  overflow-x: hidden;
  
  @media screen and (max-width: 768px) {
    
  }

  @media screen and (max-width: 480px) {
    
  }
`

export const ServicesWrapper = styled.div`
  position: relative;
  max-width: 1100px;
  width: 100%;
  max-height: calc(100vh - 80px);
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 520px) {
    padding: 0 15px;
  }
  @media screen and (max-width: 320px) {
    padding: 0 5px;
  }
  @media screen and (max-height: 710px) {
    gap: 5px;
  }
  @media screen and (max-height: 540px) {
    gap: 2px;
  }
  
`
export const ServicesContentWrapper = styled.div`
  order: ${({order}) => order};
  
  @media screen and (max-width: 450px)  and (max-height: 870px) {
    max-height: 150px;
  }
  @media screen and (max-height: 540px) {
    max-height: 130px;
  }
`
export const ServicesContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 40px;
  height: 100%;
  //max-height: ${({isExpanded}) => isExpanded ? '250px' : 'auto'};
  transition: height 0.3s;
  background: #fff;
}

  @media screen and (max-width: 930px),(max-height: 845px) {
    padding: 20px;
  }
  @media screen and (max-width: 630px) {
    padding: 15px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 12px;
  }
    @media screen and (max-width: 450px)  and (max-height: 870px){
      box-shadow: ${({reverse}) => reverse ? '4px 4px 2px -3px #0000006e' : '-4px 4px 2px -3px #0000006e'};
      height: ${({isExpanded}) => isExpanded ? '250px' : '150px'};
    }
  @media screen and (max-width: 450px),(max-height: 700px) {
    padding: 10px 12px 0 12px;
  }
    @media screen and (max-width: 360px),(max-height: 650px) {
      padding: 8px 10px 0 10px;
    }
    @media screen and (max-height: 540px) {
      padding: 6px 8px 0 8px;
      height: ${({isExpanded}) => isExpanded ? '240px' : '130px'};
    }
  
 /* @media screen and (max-height: 870px) {
    padding: 20px;
  }
  @media screen and (max-height: 710px) {
    padding:  15px;
  }*/
`
export const ServicesP = styled.p`
  display: flex;
  align-items: center;
  color: #161616;
  font-size: 14px;
  line-height: 20px;
  margin: 20px 0;
  transition: font-size 0.2s;
  
  @media screen and (max-width: 620px),(max-height: 780px) {
    font-size: ${({isExpanded}) => isExpanded ? '15px' : '13px'};
    line-height: ${({isExpanded}) => isExpanded ? '22px' : '18px'};
    margin: 10px 0;
  }
  @media screen and (max-width: 560px),(max-height: 600px) {
    margin: 5px 0;
  }
  @media screen and (max-width: 480px) and (min-height: 540px){
    line-height: 16px;
    min-height: 90px;
    margin: auto 0;
  }
  @media screen and (max-width: 450px) {
    overflow: hidden;
    min-height: auto;
    align-items: flex-start;
  }
  @media screen and (max-width: 360px),(max-height: 600px) {
    font-size: 12px;
    line-height: 16px;
    min-height: auto;
    color: black;
  }
  @media screen and (max-height: 540px) {
    margin: 0;
    font-size: 11.5px;
    line-height: 14px;
  }
  @media screen and (max-height: 480px) {
  
  }
  /*@media screen and (max-height: 870px) {
    padding: 10px 0;
  }
  @media screen and (max-height: 710px) {
    padding: 5px 0;
  }*/
`
export const ServicesBlockImgWrapper = styled.div`
  position: relative;
  max-height: 250px;
  order: ${({order}) => order};
  
`

export const ServicesBlockWrapper = styled.section`
  max-width: 700px;
  min-width: 280px;
  position: relative;
  align-self: ${({align}) => align};
  z-index: 0;

  @media screen and (max-width: 900px) {
    max-width: 600px;
  }
  @media screen and (max-width: 450px) {
    z-index: ${({zIndex}) => zIndex===1 ? 4 : zIndex===3 ? 2 : 3};
  }
  @media screen and (max-width: 320px) {
    align-self: flex-start;
  }
`
export const ServicesImgWrapper = styled.div`
  position: absolute;
  width: 700px;
  height: 382px;
  top: 18%;
  left: 21%;
 
  
  @media screen and (max-width: 900px) {
    left: 5%;
  }
  @media screen and (max-width: 480px) {
    display: none;
    .img {
      transform: rotate(115deg) scale(1.1);
    }
    left: -43%;
    top: 26%;
  }
`
export const BlackPhone = styled(MdLocalPhone)`
  font-size: 17px;
`
export const BlackPhoneActive = styled(MdPhoneInTalk)`
  font-size: 17px;
`
export const ServiceFooter = styled.div`
  display: flex;
  width: 100%;
  box-shadow: ${({isExpanded}) => isExpanded ? 'none' : '0 -12px 9px -6px #fff'};
  
  @media screen and (max-width: 450px) {
    padding: 3px 0;
    background: #fff;
  }
`

export const SpreadTextIconDown = styled(MdArrowDropDown)`
  display: none;
  font-size: 25px;
  color: rgba(152,108,53,0.85);

  @media screen and (max-width: 450px) {
    display: inline;
    margin: auto;
  }
`
export const SpreadTextIconUp = styled(MdArrowDropUp)`
  display: none;
  font-size: 25px;
  color: rgba(152,108,53,0.85);

  @media screen and (max-width: 450px) {
    display: inline;
    margin: auto;
  }
`