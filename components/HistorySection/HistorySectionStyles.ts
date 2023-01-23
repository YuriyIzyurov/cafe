import styled from "styled-components";
import Link from "next/link";

export const HistoryContainer = styled.section`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#161616')};
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`
export const HistoryBlock = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 45% 55%;
  background-color: #fff;
  z-index: 1;
`
export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`
export const HistoryH2 = styled.h2`
  font-family: 'Marck Script', cursive;
  color: rgba(157,141,121,0.85);
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -2px;
`
export const HistoryH1 = styled.h1`
  color: #161616;
  font-size: 34px;
  line-height: 34px;
`
export const HistoryP = styled.p`
  color: #161616;
  font-size: 14px;
  line-height: 20px;
  padding: 20px 0;
`
export const HistoryLink = styled(Link)`
  color: rgba(157,141,121,0.85);
  font-weight: 700;
`
export const HistoryImgWrap = styled.div`
  position: absolute;
  top: -182px;
  left: 40px;
  z-index: -1;
`
export const HistoryImgWrap2 = styled.div`
  position: absolute;
  bottom: -96px;
  left: 271px;
  z-index: -1;
`
export const HistoryImgWrap3 = styled.div`
  position: absolute;
  bottom: -85px;
  right: -44px;
  width: 140px;
`




