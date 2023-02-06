import styled from "styled-components";

export const RoomsContainer = styled.section`
  color: #fff;
  //background: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 80px 24px;
  
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const RoomsSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({flexDirection}) => flexDirection && 'row-reverse'};
`
export const GalleryWrapper =styled.div`
  max-width: 550px;

  .image-gallery-thumbnail {
    &.active {
      border: 4px solid #9f8e7b;
    }
    &:hover {
      border: 4px solid #9f8e7b;
    }
  }
  .image-gallery-thumbnail:focus {
    border: 4px solid #9f8e7b;
  }
  .image-gallery-icon:hover {
    color: #9f8e7b;
  }
`
export const RoomsDescription = styled.div`
  color: #fff;
  display: flex;
  width: 550px;
`
export const RoomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font: normal 50px Pierre, sans-serif;
    background-color: antiquewhite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 5px;
  }
  ul li {
    font-size: 18px;
  }
`