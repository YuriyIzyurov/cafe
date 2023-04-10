import styled from "styled-components";

export const MenuRedactorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 24px;
`
export const MenuSectionsContainer =styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`
export const RedactableCard = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 18px;

  .btn {
    font-size: 18px;
    border-radius: 5px;
    padding: 0 5px;
    cursor: pointer;
  }
  .cancel {
    color: orange;
    border: 1px solid orange;
  }
  .accept {
    color: chartreuse;
    border: 1px solid chartreuse;
  }
`
export const CardHeader = styled.form`
  color: orange;
  display: flex;
  justify-content: center;
  font-size: 25px;
`
export const EditBtnWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 23px;
  
`
export const RedactablePosition = styled.div`
  display: flex;
  span {
    cursor: pointer;
  }
`
export const PriceSection = styled.div`
  span:nth-child(2) {
    margin-right: 10px;
  }
`
export const EditCardWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  padding: 50px 20px;
  
  div {
    margin-bottom: 10px;
    position: relative;
  }
  span {
    font-weight: bold;
  }
  .delete-btn-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    
    button {
      background: #ff2121;
      cursor: pointer;
      border: 1px solid #161616;
      border-radius: 5px;
    }
  }
`
export const BtnRedactorWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
  padding-top: 20px;

  button:first-child {
    background: #86ff86;
  }
  
  button {
    cursor: pointer;
    min-width: 100px;
    border: 1px solid #161616;
    border-radius: 5px;
  }
`
export const UnauthorizedMessage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 72px;
  font-weight: bold;
  color: #fff;
  
  span {
    text-align: center;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
`