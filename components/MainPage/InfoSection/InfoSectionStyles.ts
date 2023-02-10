import styled from "styled-components";

export const InfoContainer = styled.section`

  @media screen and (max-width: 768px) {
    padding: 100px 0;
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
  grid-template-areas: ${({imgStart}) => 
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) =>
            imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  position: relative;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
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
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
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
  position: absolute;
  bottom: 300px;
  right: -72px;
  left: -63px;
  height: 100%;
`

export const ImgWrap2 = styled.div`
  position: absolute;
  bottom: -11px;
  left: -206px;
  height: 100%;
`

export const ImgWrap3 = styled.div`
  position: absolute;
  bottom: 0;
  left: -49px;
`

export const ImgWrap4 = styled.div`
  position: absolute;
  top: 43px;
  left: 353px;
  width: 230px;
`

export const ImgWrap5 = styled.div`
  position: absolute;
  bottom: -43px;
  left: -78px;
  height: 100%;
`

export const ImgWrap6 = styled.div`
  position: absolute;
  bottom: -50px;
  right: -139px;
`


export const ImgWrap7 = styled.div`
  position: absolute;
  bottom: 370px;
  right: -43px;
  height: 100%;
`


export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
