import styled from "styled-components";
import ImgFullBannerLogin from "../../assets/fullBannerLogin.png";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  background-image: url(${ImgFullBannerLogin});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 51px;
  width: 50%;
  z-index: 2;
  
`;
