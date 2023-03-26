import styled from "styled-components";
import { FaStar } from 'react-icons/fa'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 95%;
  height: 200px;
  background: #fff;
  color: black;
  border: 1px solid #161616;
  border-radius: 5px;
  box-shadow: 1px 1px 8px black;
`
export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
  
  
  span {
    padding: 0 7px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
  }
  span:first-child {
    flex: 0 1 130px;
    line-height: 13px;
  }
  span:nth-child(2) {
    flex: 0 0 83px;
    font-size: 16px;
    line-height: 15px;
    padding: 2px 0 0 0;
  }
  
  
`
export const CardText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
  
  p{
    overflow: hidden;
    padding: 5px 0 0 10px;
    font-size: 16px;
    line-height: 20px;
  }
`
export const CardFooter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  bottom: 0;
  opacity: .7;
  font-size: 0.9rem;
  font-weight: bold;
`
export const ReadMore = styled.span`
  font-size: 0.8rem;
  margin-right: 20px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const Star = styled(FaStar)`
  color: orange;
  cursor: pointer;
  transition: color 200ms;
`
