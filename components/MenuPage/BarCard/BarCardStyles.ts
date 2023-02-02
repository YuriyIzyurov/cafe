import styled from "styled-components";

export const BarCardContainer = styled.main`
  display: flex;
  min-width: 500px;
  justify-self: ${({justifySelf}) => justifySelf};
`
export const BarCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  align-items: center;
`
export const BarSection = styled.section`
  display: grid;
  gap: 50px;
  margin-top: 50px;
`
export const BarImgContainer = styled.div`
  position: relative;
  width: 450px;
  height: 100%;
`
export const BarSideImg = styled.img`
  position: absolute;
  top: ${({position}) => position[0] + 'px'};
  left: ${({position}) => position[1] + 'px'};
  z-index: 2;
`