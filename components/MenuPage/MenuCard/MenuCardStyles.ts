import styled from "styled-components";

export const MenuCardContainer = styled.main`
  display: flex;
  flex-direction: column;
  grid-area: ${({area}) => area};
  min-width: 500px;
  align-items: center;
  width: ${({justifySelf}) => justifySelf ? '500px' : ''};
  justify-self: ${({justifySelf}) => justifySelf ? 'center' : ''};
`
export const MenuH2 = styled.h2`
  //text-transform: uppercase;
  font-size: 20px;
`
export const MenuImg = styled.div`
  background: url(${({url}) => url}) center / cover;
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
 //align-self: flex-start;
`
export const PositionPrice = styled.div`
 //align-self: flex-end;
`


