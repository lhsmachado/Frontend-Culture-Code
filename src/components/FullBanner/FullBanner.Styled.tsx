import styled from "styled-components";
import ImgFullBannerHome from "../../assets/Rectangle4029.png";

export const Container = styled.div`
  position: relative;
  width: 95vw;
  height: 70vh;
  margin: 0 auto;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;
  object-fit: cover;  

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(23, 4, 26, 0.52);  
    z-index: -1;  
  }

  background-image: url(${ImgFullBannerHome});
  background-size: cover;
  background-position: center;
  z-index: 0; 

  @media screen and (max-width: 728px) {
    min-width: 100vw;
    max-height:40vh
  }
`;

