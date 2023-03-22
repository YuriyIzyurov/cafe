import styled from "styled-components";
import css from "styled-jsx/css";

export const BarCardContainer = styled.main`
  display: flex;
  position: relative;
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
  padding: 0 10px;
  z-index: 2;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`
export const BarSection = styled.section`
  display: grid;
  width: 100%;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;


  @media screen and (max-width: 700px) {
    margin-top: 70px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
`
export const BarImgContainer = styled.div`
  position: ${({translateY }) => translateY ? 'absolute' : 'relative'};
  top: ${({translateY}) =>  translateY};
  width: ${({sizes = [100,100]}) => sizes[0] + '%'};
  height: ${({sizes = [100,100]}) => sizes[1] + '%'};

  @media screen and (max-width: 700px) {
    ${({sizes}) => (sizes[1] === 133 || sizes[1] === 168 || sizes[1] === 203) && css`
      top: 0;
      height: 100%;
    `}
  }
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

  @media screen and (max-width: 700px) {
    position: absolute;
    right: 50%;
    top: -50%;
    opacity: 0.6;
    z-index: 1;
    transform: translateX(50%);
    height: 100%;
  }
`
export const BarSideImg = styled.img`
  position: absolute;
  top: ${({position}) => position[0] + 'px'};
  left: ${({position}) => position[1] + 'px'};
  z-index: 2;
`