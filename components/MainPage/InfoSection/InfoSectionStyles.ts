import styled from "styled-components";

export const InfoContainer = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

export const InfoWrapper = styled.div`
  max-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 620px) {
    
  }
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 1400px) {
    
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 620px) {
    justify-content: space-evenly;
    height: 100%;
  }
  
`


export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-bottom: -12px;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`

export const Column2 = styled.div`
  position: relative;
  grid-area: col2;
  max-width: 570px;

  &:after {
    content: "";
    padding-top: 100%;
    display: block;
  }

  @media screen and (max-width: 1400px),(min-width: 1000px) and (max-height: 650px) {
    width: 83%;
  }
  @media screen and (max-width: 768px) {
    width: 57%;
  }
  @media screen and (max-width: 620px),(min-width: 1000px) and (max-height: 560px) {
    width: 67%;
  }
  @media screen and (max-width: 480px) {
    width: 71%;
  }
 
  @media screen and (max-width: 768px) and (max-height: 600px){
    width: 50%;
  }
  @media screen and (min-width: 600px) and (max-width: 768px) and (max-height: 540px){
    width: 40%;
  }
  
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 1400px) {
    max-width: 600px;
    padding-bottom: 10px;
  }
`


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 64px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};


 
  @media screen and (max-width: 1400px) {
    font-size: 60px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 50px;
  }
  @media screen and (max-width: 855px) {
    font-size: 45px;
  }
  @media screen and (max-width: 768px) and (max-height: 600px) {
    margin-bottom: 10px;
  }
  }@media screen and (max-width: 620px), (max-width: 768px) and (max-height: 600px) {
    font-size: 38px;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
  @media screen and (max-width: 410px) {
    font-size: 34px;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`


export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    justify-content: center;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) and (max-height: 600px) {
    margin-bottom: 10px;
  }
  
  
`

export const ImgWrap = styled.div`
  pointer-events: none;
  position: absolute;
  top: -10%;
  left: -12%;
  height: 100%;
  width: 125%;
`

export const ImgWrap2 = styled.div`
  position: absolute;
  bottom: 15%;
  left: -41%;
  height: 34%;
  width: 45%;

  @media screen and (max-width: 620px) {
    left: -35%;
    bottom: 30%;
    img {
      transform: rotate(35deg);
    }
  }
`

export const ImgWrap3 = styled.div`
  position: absolute;
  top: 0;
  left: -10%;
  height: 51%;
  width: 35%;
`

export const ImgWrap4 = styled.div`
  position: absolute;
  bottom: 0;
  right: -10%;
  height: 43%;
  width: 45%;
`

export const ImgWrap5 = styled.div`
  position: absolute;
  bottom: -3%;
  left: -13%;
  height: 48%;
  width: 45%;
`

export const ImgWrap6 = styled.div`
  position: absolute;
  top: -14%;
  right: -29%;
  height: 78%;
  width: 40%;
`


export const ImgWrap7 = styled.div`
  position: absolute;
  top: -21%;
  right: -12%;
  height: 71%;
  width: 50%;
`


export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
export const OffsetBottom = styled.div`
  height: 80px;
  width: 100%;
`