import styled from "styled-components";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'


export const ReviewsContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`
export const ModalBG = styled.div`
  //display: ${({modalIsOpen}) => modalIsOpen ? 'flex' : 'none'};
  display: flex;
  opacity: ${({modalIsOpen}) => modalIsOpen ? 1 : 0};
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left:0;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: opacity 0.3s;
  pointer-events: ${({modalIsOpen}) => modalIsOpen ? 'all' : 'none'};
`
export const ModalCard = styled.div`
  transform: ${({modalIsOpen}) => modalIsOpen ? 'scale(1)' : 'scale(0.2)'};
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-width: 30%;
  min-width: 400px;
  transition: transform 0.4s;
  
  
  
  header {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    h1 {
      font-size: 1rem;
    }
    span {
      font-size: 1.5rem;
      line-height: 1rem;
    }
  }
  main {
    p {
      padding: 5px 20px;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    
    span {
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  @media screen and (max-width: 480px) {
    min-width: 320px;
    header {
      h1{
        font-size: 0.85rem;
        line-height: 1.5rem;
      }
      span {
        font-size: 1.35rem;
        padding-top: 1px;
      }
    }
  }
`
export const ReviewsSection = styled.section`
  width: 100%;
  position: relative;
  height: calc(50vh - 40px);
  display: flex;
  min-height: 335px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: ${({lastSection}) => lastSection && 'calc(100vh - 80px)'};
  }
`

export const ReviewsPageImgWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  background-image: url(${({url}) => url});
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: ${({display}) => display ? 'block' : 'none'};
    width: 100%;
    height: 100%;
  }
`
export const ParallaxImgWrapper = styled.div`
  position: relative;
  height: 100%;
  display: ${({hideOnWide}) => hideOnWide ? 'none' : 'block'};
  
  @media screen and (max-width: 768px) {
    display: block;
    height: 40%;
  }
`
export const ParallaxBG = styled.div`
  height: 100%;
  
  @media screen and (max-width: 768px) {
    position: relative;
    height: 120%;
   // bottom: 0;
  }
`
export const ImgDivider = styled.div`
  display: none;
  background: white;

  @media screen and (max-width: 768px) {
    display: block;
    height: 20%;
  }
`
export const TextBlockHeader = styled.header`
  font: normal 55px var(--font-caligraphic);
  line-height: 66px;
  white-space: nowrap;
  text-align: center;
  background-color: antiquewhite;
  background-image: linear-gradient(180deg, #312516, #cbbfaf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 10px;

  @media screen and (max-width: 768px), (max-height: 820px) {
    font-size: 45px;
    line-height: 55px;
  }
  @media screen and (max-width: 768px), (max-height: 820px) {
    font-size: 45px;
    line-height: 55px;
  }
  @media screen and (max-height: 820px) {
    padding-bottom: 3px;
  }
  @media screen and (max-height: 770px) {
    font-size: 35px;
    line-height: 45px;
  }
`
const TextBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const TextBlockFirst = styled(TextBlock)`
  position: relative;
  z-index: 2;
  color: #161616;
  background: white;
  padding: 5px 40px;
  
  p {
    padding-bottom: 10px;
  }
  
  @media screen and (max-width: 1000px) {
    padding: 5px 30px;
    p {
      line-height: 1.2rem;
    }
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 20px 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
    padding: 20px 20px;
  }
  @media screen and (max-width: 320px) {
    p {
      overflow: auto;
    }
  }
`
export const TextBlockSecond= styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: #161616;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const TextBlockSecondWrapper = styled(TextBlock)`
  position: relative;
  height: 100%;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`
export const TextBlockThird = styled(TextBlock)`
  color: #161616;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 30px 0;
  }
`
export const TextBlockP = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: 2.1px;
  text-transform: uppercase;
  color: ${({light}) => light ? '#fff' : '#161616'};
  padding: 10px 0 25px 0;
  white-space: nowrap;
  
  
  @media screen and (max-width: 1000px) {
    font-size: 0.9rem
  }
  @media (max-width: 390px) {
    transform: scale(0.85);
  }
`
export const ReviewsBlockWrapper = styled.div`
  width: 100%;
`
export const PaginationButton = styled.div`
  font-size: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 50px;

  @media screen and (max-width: 1000px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 480px), (max-height: 820px) {
    font-size: 32px;
    margin: 0 10px;
  }
`

export const PaginationButtonLeft = styled(MdOutlineArrowBackIosNew)`
  
`
export const PaginationButtonRight= styled(MdOutlineArrowForwardIos)`
 
`
export const ReviewsFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 1000px) {
    padding: 10px 0;
  }
`
export const ReviewForm = styled.aside`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #161616;
  transition: 0.8s;

  @media screen and (min-width: 769px) {
    left: ${({isFormActive}) => isFormActive ? '100%' : 0};
  }
  @media screen and (max-width: 768px) {
    left: ${({isFormActive}) => isFormActive ? 0 : '-100%'};
    z-index: 3;
  }
`
