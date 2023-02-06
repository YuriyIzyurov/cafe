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
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ServicesWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  height: 300px;
  width: 1000px;
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
`
export const ServicesBlockWrapper1 = styled.div`
  position: absolute;
  bottom: 280px;
  left: 0;
  max-width: 700px;
`
export const ServicesBlockWrapper2 = styled.div`
  position: absolute;
  top: 30px;
  left: 280px;
  max-width: 700px;
  z-index: 0;
`
export const ServicesBlockWrapper3 = styled.div`
  position: absolute;
  top: 284px;
  left: 0;
  max-width: 700px;
`
export const ServicesImgWrapper = styled.div`
  position: absolute;
  top: -111px;
  left: 182px;
`
export const BlackPhone = styled(MdLocalPhone)`
  font-size: 17px;
`
export const BlackPhoneActive = styled(MdPhoneInTalk)`
  font-size: 17px;
`
