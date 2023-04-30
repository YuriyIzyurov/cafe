import styled from "styled-components";


export const ErrorPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ErrHeader = styled.header`
  display: flex;
  min-width: 400px;
  min-height: 200px;

  @media screen and (max-width: 440px) {
    transform: scale(0.5);
  }
`
export const ErrMain = styled.main`
  padding: 20px 0 25px 0;
  font-size: 18px;
  color: #fff;
  
  h1 {
    text-align: center;
  }

  @media screen and (max-width: 440px) {
    font-size: 13px;
  }
`
export const ErrFooter = styled.footer`

`
export const ErrImgWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`
export const BigFour = styled.div`
  width: 25%;
  position: relative;
  
  &::before {
    content: "4";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #ca2306;
    font-size: 13.5em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
