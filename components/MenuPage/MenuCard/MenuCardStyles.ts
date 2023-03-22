import styled from "styled-components";
import css from "styled-jsx/css";

export const MenuCardContainer = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: ${({area}) => area};
  align-items: center;
  width: 100%;
  min-width: 290px;
  z-index: 4;


  @media screen and (max-width: 768px) {
    width: ${({isMobile}) => isMobile && '60%'};
    padding-left: 10px;
  }
  @media screen and (max-width: 480px) {
    ${({isMobile}) => isMobile && css`
      position: absolute;
      top: 0;
    `}
    left:${({rightPosition}) => rightPosition && 0};
    right:${({rightPosition}) => !rightPosition && 0};
  }
  @media screen and (max-width: 420px) {
    ${({isMobile}) => isMobile && css`
      position: absolute;
      top: 0;
    `}
    left:${({rightPosition}) => rightPosition && 0};
    right:${({rightPosition}) => !rightPosition && 0};
  }
`
export const MenuCardWrap = styled.div`
  position: relative;
  display: flex;
  overflow-x: clip;
  min-height: ${({reducedCard}) => reducedCard ? '220px' : '260px'};

  @media (max-width: 480px) {
    justify-content: ${({justifyContent}) => justifyContent};
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  
 
`
export const ShadowBG = styled.div`
  display: none;
  background: #161616;
  position: absolute;
  width: 60%;
  height: ${({leftPosition}) => leftPosition ? '71%' : '100%'};
  right: ${({leftPosition}) => leftPosition ? '40%' : '5%'};
  top: ${({leftPosition}) => leftPosition && '16%'};
  opacity: 0.73;
  box-shadow: 0 0 3px 3px #161616, 0 3px 13px 6px #161616;
  z-index: 1;
  
  @media screen and (max-width: 420px) {
    display: ${({rightPosition,leftPosition}) => (rightPosition || leftPosition) && 'block'};
  }
`
export const CardPosition = styled.div`
  display: flex;
  z-index: 2;
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

