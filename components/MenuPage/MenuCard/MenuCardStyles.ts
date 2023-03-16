import styled from "styled-components";
import css from "styled-jsx/css";

export const MenuCardContainer = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: ${({area}) => area};
  align-items: center;
  width: 100%;
  min-width: 290px;
  z-index: 3;


  @media screen and (max-width: 768px) {
    width: ${({isMobile}) => isMobile && '60%'};
    padding-left: ${({isMobile}) => !isMobile && '10px'};
  }
  @media screen and (max-width: 480px) {
    ${({isMobile}) => isMobile && css`
      position: absolute;
      top: 0;
      right:0;
    `}
  }
`
export const MenuCardWrap = styled.div`
  position: relative;
  display: flex;
  min-height: 260px;

  @media (max-width: 480px) {
    
  }
`
export const MenuH2 = styled.h2`
  //text-transform: uppercase;
  font-size: 20px;
`
export const MenuImg = styled.div`
  background: url(${({url}) => url}) center / cover;
  min-width: 230px;
  padding: 0 27px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
`
export const TestBG = styled.div`
  background: greenyellow;
  max-width: 230px;
  min-width: 230px;
  display: flex;
  justify-content: center;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
 
`
export const CardPosition = styled.div`
  display: flex;
`
export const Dots = styled.span`
  flex-grow: 1;
  border-bottom: 2px dotted white;
`
export const PositionName = styled.div`
  display: flex;
  align-items: center;
  max-width: 320px;
  font-size: ${({fontSize}) => fontSize};
`
export const PositionPrice = styled.div`
  min-width: 60px;
  display: flex;
  align-items: flex-end;
`
export const Ruble = styled.span`
  padding-left: 3px;
`

