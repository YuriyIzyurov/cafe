import styled from "styled-components";
import css from "styled-jsx/css";

export const MenuContainer = styled.section`
  color: #fff;
  padding-top: 80px;
  
  @media screen and (max-width: 768px) {
    
  }
`
export const MenuHeader = styled.header`
  padding: ${({padding}) => padding};
  display: flex;
  justify-content: center;
  font: normal 75px var(--font-caligraphic);
  line-height: 75px;
  background-color: antiquewhite;
  background-image: linear-gradient(180deg, #5b4428, antiquewhite);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;

  @media screen and (max-width: 768px) {
    font-size: 60px;
    line-height: 60px;
    padding: 10px 0 0 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 45px;
    line-height: 45px;
    padding: 5px 0 0 0;
  }
`
export const MenuToggle = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;

  @media screen and (max-width: 480px) {
  transform: scale(0.7);
  }
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  gap: 10px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const AddMenuWrapper = styled(MenuWrapper)`
  min-height: calc(100vh - 305px);
`

const Section = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 50px;
  margin: 50px 0;

  @media screen and (max-width: 1100px) {
    gap: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    gap: 30px;
    margin: 30px 0;
  }
`
export const MenuSection = styled(Section)`
  grid-template-areas: 'header top'  'image middle'  'image footer' 'footer2 footer2';
`
export const MenuSectionReversed = styled(Section)`
  grid-template-areas: 'top header'  'middle image';
`


export const MenuImgWrapper = styled.div`
  grid-area: image;
  display: ${({isMobile}) => isMobile ? 'none' : 'flex'};
  align-items: center;
  min-width: 180px;
  //max-height: ${({isMobile}) => !isMobile && '55%'};
  
 

  @media screen and (max-width: 768px) {
    display: ${({isMobile}) => isMobile ? 'flex' : 'none'};
    width: ${({isMobile}) => isMobile && '40%'};
  }
`
export const FlexibleImgWrap = styled.div`
  position: relative;
  width: 100%;
  &:after {
    content: "";
    padding-top: ${({isMobile, isSoup}) => isMobile ? '90%' : (isSoup ? '70%' : '100%')};
    display: block;
  }
`
export const ImgMask2 = styled.div`
  //visibility: hidden;
  overflow: hidden;
  width: 81%;
  height: 110%;
  bottom: ${({position}) => position[0] + '%'};
  right: ${({position}) => position[1] + '%'};
  position: absolute;
  z-index: 1;

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${({position}) => position[0] === 13 ? '-69px' : '-20px'};
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, transparent, #161617);
    z-index: 100;
  }
  
  @media screen and (min-width: 769px) {
    display: ${({isInvisibleOnDesktop}) => isInvisibleOnDesktop && 'none'};
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 134%;
  }
`
export const ImgMask4 = styled.div`
  overflow: hidden;
  position: absolute;
  width: ${({isMobile}) => isMobile ? '90%' : '81%'};
  height: ${({isMobile}) => isMobile ? '120%' : '110%'};
  z-index: 1;
  bottom: ${({isMobile}) => isMobile ? '150px' : '110px'};
  left: ${({isMobile}) => isMobile ? '-90px' : '-77px'};
  transform: ${({isMobile}) => isMobile ? 'rotate(-46deg)' : 'none'};
  
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 47px;
    width: 75%;
    height: 20px;
    background: linear-gradient(to bottom, transparent, #161617);
   // background: linear-gradient(to bottom, transparent, greenyellow);
    z-index: 100;
  }
`
export const ImgMask6 = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 97%;
  z-index: 1;
  bottom: ${({isMobile}) =>  isMobile ? '-150px' : '-180px'};
  left: ${({isMobile}) =>  isMobile ? '-85px' : '-117px'};
  
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 70px;
    width: ${({inView}) => inView ? '9%': '53%'};
    height: 30px;
    background: linear-gradient(to bottom, transparent, #161617);
    z-index: 100;
  }
`

export const MenuSideImgWrapper = styled.div`
  position: absolute;
  width: ${({sizes = [100,100]}) => sizes[0] + '%'};
  height: ${({sizes = [100,100]}) => sizes[1] + '%'};
  top: ${({isMobile,id}) =>  isMobile ? (id === 'soup' ? '-35px' :'20px') : (id === 'soup' ? '-15%' :'40px')};
  left: ${({isMobile,id}) =>  isMobile ? (id === 'soup' ? '-30px' : 0) : (id === 'soup' ? 0 :'40px')};
  z-index: 2;
`
export const ShadowOnMobDevices = styled.div`
  display: none;
  background: #161616;
  position: absolute;
  width: 25%;
  height: 80%;
  right: 8%;
  top: 20%;
  z-index: 3;
  clip-path: circle(70.3% at -64% 50%);
  opacity: 0.73;
  box-shadow: 0 0 3px 3px #161616, 0 0 13px 10px #161616;

  @media screen and (max-width: 480px) {
    display: block;
  }
`
export const MenuSideImgWrapper2 = styled.div`
  position: absolute;
  width: 46%;
  height: 45%;
  bottom: ${({isMobile}) =>  isMobile ? 0 : '37px'};
  left: ${({isMobile}) =>  isMobile ? 0 : '35px'};
  z-index: 1;
`
const SideImg = styled.img`
  position: absolute;
  z-index: 1;
`

export const MenuSideImg2 = styled.img`
  max-width: 98%; //чтоб не торчал лишний пиксель
`
export const MenuSideImg3 = styled(SideImg)`
  bottom: 37px;
  left: 35px;
  width: 140px;
`
export const MenuSideImg4 = styled.img`
  max-width: 98%;
`
export const MenuSideImg5 = styled(SideImg)`
  bottom: 118px;
  right: -12px;
`
export const MenuSideImg6 = styled.img`
  max-width: 98%;
`
export const MenuBranchWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 35%;
  height: 90%;
  bottom: ${({isMobile}) =>  isMobile ? 0 : '118px'};
  right: ${({isMobile}) =>  isMobile ? '10px' : '-12px'};
`
export const AddMenuContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const AddMenuText = styled.div`
  font-size: 18px;
`
export const AddMenuGalary = styled.div`
  display: flex;
  width: 1100px;
  padding-bottom: 60px;
  //align-content: flex-start;
  align-self: ${({alignSelf = 'flex-start'}) => alignSelf};
  justify-content: ${({alignContent = 'flex-start'}) => alignContent};
  flex-wrap: ${({wrap = 'wrap'}) => wrap};
`
export const GalaryImgWrapper = styled.div`
  position: absolute;
  top: ${({position}) => position[0]};
  left: ${({position}) => position[1]};
  width: ${({width}) => width};
  height: ${({height}) => height};
`