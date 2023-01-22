import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll'

export const Button = styled(LinkScroll)`
  //background: ${({primary}) => (primary ? '#a2917c' : 'transparent')};
  border: 3px solid #fff;
  font-weight: 700;
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color:  #fff;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: ${({primary}) => (primary ? '#010606' : '#01BF71')};
  }
`