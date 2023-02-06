import styled from "styled-components";


export const MenuContainer = styled.section`
  color: #fff;
  padding-top: 80px;
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const MenuHeader = styled.header`
  padding: ${({padding}) => padding};
  display: flex;
  justify-content: center;
  font: normal 75px Pierre, sans-serif;
  line-height: 75px;
  background-color: antiquewhite;
  background-image: linear-gradient(180deg, #5b4428, antiquewhite);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`
export const MenuToggle = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({padding = 20}) => `${padding}px 0`};
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  gap: 10px;
`
export const AddMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin: 50px 0;
`
export const MenuSection = styled(Section)`
  grid-template-areas: 'header top'  'image middle'  'image footer' 'footer2 footer2';
`
export const MenuSectionReversed = styled(Section)`
  grid-template-areas: 'top header'  'middle image'  'footer image' 'footer2 image';
`


export const MenuImgWrapper = styled.div`
  grid-area: image;
  position: relative;
  min-height: 500px;
`
export const ImgMask2 = styled.div`
  //visibility: hidden;
  overflow: hidden;
  bottom: ${({position}) => position[0] + 'px'};
  right: ${({position}) => position[1] + 'px'};
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
`
export const ImgMask4 = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 1;
  bottom: 110px;
  left: -77px;
 // transform: rotate(172deg);
  
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
  z-index: 1;
  bottom: -180px;
  left: -117px;
  
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

export const MenuSideImg = styled.img`
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 2;
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