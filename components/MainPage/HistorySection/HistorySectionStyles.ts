import styled from "styled-components";
import Link from "next/link";
import { HiArrowNarrowRight, HiChevronRight } from 'react-icons/hi'
import css from "styled-jsx/css";

export const HistoryContainer = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#161616')};
  //scroll-snap-align: start;
  //scroll-snap-stop: always;

  @media screen and (max-width: 450px) and (max-height: 530px) {
    padding: 0 8px;
  }
`

export const HistoryWrapper = styled.div`
  display: flex;
  align-items: center;   
  max-height: calc(100vh - 80px);
  z-index: 1;

   
`
export const HistoryBlock = styled.div`
  position: relative;
  max-height: 400px;   
  display: grid;
  height: ${({mini}) => mini && '250px'};
  grid-template-columns: ${({reverse = false, mini = false}) => 
          reverse ? (mini ? '60% 40%' :'55% 45%') : (mini ? '40% 60%' : '45% 55%')};
  background-color: #fff;
  z-index: 1;
  box-shadow: 2px 2px 8px black;


     @media screen and (max-width: 768px) {
          max-height: 300px;
     }
     @media screen and (max-width: 710px) {
         ${({mini}) => !mini && css`
           display: flex;
           flex-direction: column;
           max-height: 100%
         `}
     }
     @media screen and (max-height: 870px) {
          height: ${({mini}) => mini && 'auto'};
     }
`
export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 100px;

  @media screen and (max-width: 1000px),(max-height: 600px) {
    padding: 40px 60px;
  }
     @media screen and (max-width: 768px) {
          padding: 20px;
     }
  @media screen and (max-width: 420px) {
    padding: 15px;
  }
  @media screen and (max-width: 710px) and (max-height: 600px) {
    padding: 10px 20px;
  }
  @media screen and (max-width: 500px) and (max-height: 530px) {
    padding: 10px 10px;
  }
`
export const HistoryImgWrapper = styled.div`
  position: relative;
  //width: 100%;
  
  @media screen and (max-width: 1400px) {
 
  }
  @media screen and (max-width: 710px) {
   min-height: 250px;
  }
  @media screen and (max-width: 710px) and (max-height: 600px) {
    min-height: 230px;
  }
  @media screen and (max-height: 530px) {
    min-height: 210px;
  }
`
export const HistoryH2 = styled.h2`
  font-family: var(--font-caligraphic);
  color: rgba(152,108,53,0.85);
  font-weight: 100;
  font-size: 40px;
  line-height: 50px;

  @media screen and (max-height: 600px) and (max-width: 710px){
    font-size: 35px;
    line-height: 35px;
  }
`
export const HistoryH1 = styled.h1`
  color: #161616;
  white-space: ${({fontSize = '34px'}) => fontSize === '34px' && 'nowrap'};
  font-size: ${({fontSize = '34px'}) => fontSize};
  line-height: ${({fontSize = '34px'}) => fontSize};
     
  
     @media screen and (max-width: 930px) {
          font-size: ${({fontSize }) => fontSize === '25px' && '20px'};
     }
  @media screen and (max-width: 620px),(max-height: 780px) {
    font-size: ${({fontSize }) => fontSize === '25px' && '18px'};
    line-height: ${({fontSize }) => fontSize === '25px' && '22px'};
  }
  @media screen and (max-width: 480px) {
    font-size: ${({fontSize }) => fontSize === '25px' && '17px'};
    line-height: ${({fontSize }) => fontSize === '25px' && '20px'};
    padding-bottom: 3px;
  }
  @media screen and (max-width: 420px) {
    font-size: ${({fontSize}) => fontSize !== '25px' && '28px'};
  }
  @media screen and (max-width: 320px) {
    font-size: ${({fontSize}) => fontSize === '25px' ? '15px' : '25px'};
  }
  @media screen and (max-height: 650px) {
    font-size: ${({fontSize}) => fontSize === '25px' && '16px'};
  }
  @media screen and (max-height: 600px) {
    font-size: ${({fontSize}) => fontSize === '25px' ? '15px' : '28px'};
  }
  @media screen and (max-height: 540px) {
    font-size: ${({fontSize}) => fontSize === '25px' && '13px'};
    line-height: ${({fontSize}) => fontSize === '25px' && '16px'};
  }
`
export const HistoryP = styled.p`
  color: #161616;
  font-size: 14px;
  line-height: 20px;
  padding: 20px 0;


  
  @media screen and (max-width: 320px),(max-height: 650px) and (max-width: 710px) {
    font-size: 13px;
    line-height: 15px;
    padding: 3px 0;
  }
  @media screen and (max-height: 530px) and (max-width: 420px) {
    font-size: 12px;
    line-height: 13px;
    padding: 2px 0;
  }
 
`
export const HistoryLink = styled(Link)`
  color: rgba(152,108,53,0.85);
  font-weight: 700;
  max-width: 140px;
  display: flex;
  align-items: center;
  white-space:nowrap;
  
  span {
    line-height: 33px;
    padding-right: 2px;
  }
  @media screen and (max-width: 480px),(max-height: 600px) {
    span {
      line-height: 27px;
    }
  }
  @media screen and (max-width: 360px) {
    span {
      font-size: 15px;
    }
  }
  @media screen and (max-height: 540px) {
    span {
      font-size: 13px;
      line-height: 24px;
    }
  }

`
export const HistoryImgWrap = styled.div`
  position: absolute;
  top: -43%;
  left: 5%;
  z-index: -1;

     @media screen and (max-width: 710px) {
          top: -30%;
          left: 20%;
     }
  
     @media screen and (max-width: 510px), (max-height: 680px) and (max-width: 710px){
          display: none;
     }
     @media screen and (max-height: 810px) and (max-width: 710px) {
          top: -20%;
     }
      @media screen and (max-height: 740px) and (min-width: 711px) {
        top: -30%;
      }
`
export const HistoryImgWrap2 = styled.div`
  position: absolute;
  bottom: -30%;
  left: 17%;
  z-index: -1;

     @media screen and (max-width: 768px) {
          left: 5%;
     }
     @media screen and (max-width: 710px) {
          display: none;
          bottom: 20%;
          left: 20%;
          
     }
     @media screen and (max-height: 710px) {
          bottom: -25%;
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




