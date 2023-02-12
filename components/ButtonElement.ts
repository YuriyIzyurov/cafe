import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll'
import Link from "next/link";

export const Button = styled.div`
  min-width: 230px;
  
  border: ${({color = '#fff', borderless}) => !borderless ? `3px solid ${color}` : 'none'};
  border-left: ${({middleBtn, sectionIsActive,rightBtn }) => (middleBtn && sectionIsActive) || rightBtn ? 'none' : ''};
  border-right: ${({middleBtn, sectionIsActive, rightBtn}) => (middleBtn || sectionIsActive) && !rightBtn ? 'none' : ''};
  border-bottom: ${({sectionIsActive, isBottom}) => sectionIsActive && !isBottom ? 'none' : ''};
  border-top: ${({sectionIsActive, isBottom}) => sectionIsActive && isBottom? 'none' : ''};
  font-weight: 700;
  white-space: nowrap;
  padding: ${({sectionIsActive, isBottom, middleBtn}) => (sectionIsActive && isBottom && middleBtn ? '13.5px 30px' : '12px 30px')};
  color:  ${({color = '#fff'}) => color};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({sectionIsActive , color = '#fff'}) => sectionIsActive ? 'transparent' : color};
    color: ${({sectionIsActive , color}) => sectionIsActive ? color : '#010606'};
  }
`
export const ButtonSmoothScroll = styled(LinkScroll)`
`
export const ButtonRoute = styled(Link)`
`