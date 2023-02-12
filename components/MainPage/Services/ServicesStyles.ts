import styled from "styled-components";
import { MdLocalPhone,MdPhoneInTalk } from 'react-icons/md'

export const ServicesContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #161616;
  
  @media screen and (max-width: 768px) {
    
  }

  @media screen and (max-width: 480px) {
    
  }
`

export const ServicesWrapper = styled.div`
  position: relative;
  max-width: 1100px;
  width: 100%;
  gap: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 520px) {
    padding: 0 15px;
    gap: 5px;
  }
`
export const ServicesP = styled.p`
  color: #161616;
  font-size: 14px;
  line-height: 20px;
  padding: 20px 0;

  @media screen and (max-width: 560px) {
    padding: 3px 0;
    font-size: 13px;
  }
  @media screen and (max-width: 480px) {
    line-height: 14px;
  }  
`
export const ServicesBlockWrapper1 = styled.div`
  max-width: 700px;
  align-self: flex-start;
  z-index: 0;

  @media screen and (max-width: 900px) {
    max-width: 600px;
  }
`
export const ServicesBlockImgWrapper = styled.div`
  position: relative;
`
export const ServicesBlockWrapper2 = styled.div`
  max-width: 700px;
  align-self: flex-end;
  z-index: 0;

  @media screen and (max-width: 900px) {
    max-width: 600px;
  }
`
export const ServicesBlockWrapper3 = styled.div`
  max-width: 700px;
  align-self: flex-start;
  z-index: 0;
  
  @media screen and (max-width: 900px) {
    max-width: 600px;
  }
`
export const ServicesImgWrapper = styled.div`
  position: absolute;
  top: 18%;
  left: 21%;
`
export const BlackPhone = styled(MdLocalPhone)`
  font-size: 17px;
`
export const BlackPhoneActive = styled(MdPhoneInTalk)`
  font-size: 17px;
`
