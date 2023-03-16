import styled from "styled-components";

export const BarCardContainer = styled.main`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent};
  width: 100%;
`
export const CardTable =styled.div`
  align-self: flex-end;
  font-weight: bold;
  display: flex;
  span {
    min-width: 60px;
  }
  span:last-child {
    padding-left: 5px;
  }
`
export const BarCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  align-self: center;
`
export const BarSection = styled.section`
  display: grid;
  width: 100%;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`
export const BarImgContainer = styled.div`
  position: ${({translateY }) => translateY ? 'absolute' : 'relative'};
  top: ${({translateY}) =>  translateY};
  width: ${({sizes = [100,100]}) => sizes[0] + '%'};
  height: ${({sizes = [100,100]}) => sizes[1] + '%'};
`
export const BarImgContainerWrap = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:after {
    content: "";
    padding-top: ${({height}) => height && height + '%'};
    display: block;
  }
`
export const BarSideImg = styled.img`
  position: absolute;
  top: ${({position}) => position[0] + 'px'};
  left: ${({position}) => position[1] + 'px'};
  z-index: 2;
`