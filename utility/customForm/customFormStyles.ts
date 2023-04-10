import styled from "styled-components";
import css from "styled-jsx/css";
import { Button } from "../../components/ButtonElement";


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 400px;
  min-width: 210px;
 // height: 100%;
  width: calc(100% - 40px);

  --squish-animation-time: 500ms;
  --progress-animation-time: 1000ms;
  --circle-animation-time: 300ms;
  --checkmark-animation-time: 500ms;
  --spread-animation-time: 800ms;
  --success-color: #71df88;
`

export const StyledInput = styled.input`
  height: 40px;
  padding-left: 10px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: orange;
  }
`
export const StyledTextArea = styled.textarea`
  height: 80px;
  padding: 5px 10px;
  width: 100%;
  outline: none;
  resize: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    border-color: orange;
  }
`
export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 15px;
`
export const ErrorMessage = styled.span`
  position: absolute;
  bottom: ${({isLoginError}) => isLoginError? '10%' : '-2px'};
  left: ${({isLoginError}) => isLoginError? '50%' : 0};
  transform: ${({isLoginError}) => isLoginError && 'translateX(-50%)'};
  color: #ff3107;
  font-size: 13px;
  font-weight: 600;
`

export const BtnWrapper = styled.div`
  position: relative;
  padding: ${({animating}) => animating ? 0 : '10px'};
  max-width: 300px;
  align-self: center;
  
`
export const CheckMarkWrapper = styled.div`
  ${({animating}) => animating && css`
    animation:
        circle
        var(--circle-animation-time)
        calc(var(--squish-animation-time) + var(--progress-animation-time))
        forwards
        cubic-bezier(0.26, 0.6, 0.46, 1.7);
  `}
  width: 0;
  height: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  #checkmark-svg {
    stroke: white;
    width: 25px;
    stroke-dashoffset: 40.84104919433594;
    stroke-dasharray: 40.84104919433594;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3px;
    ${({animating}) => animating && css`
    animation:
        checkmark
        var(--checkmark-animation-time)
        calc(var(--squish-animation-time) + var(--progress-animation-time) + var(--circle-animation-time))
        forwards;
  `}
  }
  

  @keyframes circle {
    0% {
      width: 330px;
      height: 5px;
    }
    100% {
      background-color: var(--success-color);
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
  }
`
export const SuccessBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const SuccessMessage = styled.span`
  overflow: hidden;
  word-break: break-all;
  width: 0;
  height: 0;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  padding-left: 10px;
  
  ${({animating}) => animating && css`
    animation: spread var(--spread-animation-time) 
    calc(var(--squish-animation-time) 
    + var(--progress-animation-time) 
    + var(--circle-animation-time) 
    + var(--checkmark-animation-time)) forwards;
  `}
  
  @keyframes spread{
    0% {
      width: 0;
      height: 25px;
      opacity: 0;
    }
    100% {
      width: 200px;
      height: 25px;
      opacity: 1;
    }
  }
`
export const AnimatedSection = styled.section`
  flex-direction: column;
  display: ${({animating}) => animating ? 'none' : 'flex'};
`
export const AnimatedButton = styled(Button)`
  
  ${({animating}) => animating && css`
    background-color: transparent;
    color: transparent;
    user-select: none;
    cursor: default;
    border: none;
    animation: hide 0ms calc(var(--squish-animation-time) + var(--progress-animation-time)) forwards;
    &:hover {
      background: transparent;
      color: transparent;
      transition: none;
    }
  `}
  
  &:before {
    content: '';
    display: ${({animating}) => animating ? 'block' : 'none'};
    position: absolute;
    background-color: #fff;
    border-radius: 5px;
    inset: 0;
    animation: squish var(--squish-animation-time) cubic-bezier(0.26, 0.6, 0.46, 1.7);
    animation-fill-mode: forwards;
  }
  &:after {
    content: '';
    display: ${({animating}) => animating ? 'block' : 'none'};
    position: absolute;
    background-color:  var(--success-color);
    border-radius: 5px;
    left: 51%;
    right: 51%;
    top: 45%;
    bottom: 45%;
    animation: progress var(--progress-animation-time) var(--squish-animation-time);
    //animation-fill-mode: forwards;
  }
  @keyframes squish {
    100% {
      left: -25%;
      right: -25%;
      top: 45%;
      bottom: 45%;
    }
  }
  @keyframes progress {
    100% {
      left: -25%;
      right: -25%;
    }
  }
  @keyframes hide {
    100% {
      width: 0;
      height: 0;
      padding: 0;
      min-width: 0;
    }
  }
  @keyframes checkmark {
    100% {
      stroke-dashoffset: 0;
    }
  }
`