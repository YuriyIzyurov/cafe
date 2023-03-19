import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll'
import Link from "next/link";

export const Button = styled.button`
  min-width: 230px;
  border-radius: 7px;
  background: transparent;
  border: ${({color = '#fff', borderless}) => !borderless ? `1px solid ${color}`  : 'none'};
  border-left: ${({middleBtn, sectionIsActive,rightBtn }) => (middleBtn && sectionIsActive) || rightBtn ? 'none' : ''};
  border-right: ${({middleBtn, sectionIsActive, rightBtn}) => (middleBtn || sectionIsActive) && !rightBtn ? 'none' : ''};
  border-bottom: ${({sectionIsActive, isBottom}) => sectionIsActive && !isBottom ? 'none' : ''};
  border-top: ${({sectionIsActive, isBottom}) => sectionIsActive && isBottom? 'none' : ''};
  font-weight: 700;
  white-space: nowrap;
  //padding: ${({sectionIsActive, isBottom, middleBtn}) => (sectionIsActive && isBottom && middleBtn ? '13.5px 30px' : '12px 30px')};
  padding:  12px 30px;
  color:  ${({color = '#fff'}) => color};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  span.mobile {
    display: none;
  }
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({sectionIsActive , color = '#fff'}) => sectionIsActive ? 'transparent' : color};
    color: ${({sectionIsActive , color}) => sectionIsActive ? color : '#010606'};
  }

  @media screen and (max-width: 768px) {
    min-width: ${({color}) => color === '#a1907b' && '150px'};
    padding: ${({color}) => color === '#a1907b' && '6px 15px'};
    
    span.desktop {
      display: none;
    }
    span.mobile {
      display: inline-block;
    }
  }
  @media screen and (max-width: 480px), (max-height: 820px) {
    transform: ${({color}) => color !== '#a1907b' && 'scale(0.8)'};
  }
  @media screen and (max-width: 320px) {
    min-width: 150px;
    padding: 6px 15px;
  }
`
export const ButtonSmoothScroll = styled(LinkScroll)`
`
export const ButtonRoute = styled(Link)`
`
export const ReviewButton = styled(Button)`
  border: 1px solid #161616;
  color: #161616;
  
  &:hover {
    border: 1px solid #fff;
    background: #161616;
    color: #fff;
  }
`