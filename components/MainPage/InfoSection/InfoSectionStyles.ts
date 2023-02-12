import styled from "styled-components";

export const InfoContainer = styled.section`

  @media screen and (max-width: 768px) {
    
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    
  }
  @media screen and (max-width: 480px) {
    justify-content: space-evenly;
  }
  @media screen and (max-width: 395px) {
    justify-content: flex-start;
  }
`
export const Additional110px = styled.div`
  height: 110px;
  display: none;
  
  @media screen and (max-width: 480px) {
    display: block;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 1400px) {
    align-self: flex-start;
    margin-top: 60px;
  }
  @media screen and (max-width: 560px) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 0;
  }
`

export const Column2 = styled.div`
  position: relative;
  grid-area: col2;
  height: 525px;
  
  @media screen and (max-width: 1400px) {
  width: 100%;
  }
  @media screen and (max-width: 920px) {
    width: 70%;
    height: 410px;
  }
  @media screen and (max-width: 768px) {
    width: 64%;
    height: 358px;
  }
  @media screen and (max-width: 560px) {
    width: 59%;
    height: 293px;
  }
  @media screen and (max-width: 480px) {
    width: 61%;
    height: 251px;
  }
  @media screen and (max-width: 430px) {
    width: 65%;
    height: 228px;
  }
  @media screen and (max-width: 370px) {
    width: 63%;
    height: 186px;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 1400px) {
    padding-bottom: 10px;
  }
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 64px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 630px) {
    font-size: 52px;
  }
  @media screen and (max-width: 480px) {
    font-size: 42px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#f7f8fa')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
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
