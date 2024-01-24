import styled from "styled-components";
import ImgFullBannerLogin from "../../assets/fullBannerLogin.png";
import ImgFullBannerLoginMobile from "../../assets/fullBannerLoginMobile.png";

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

  @media screen and (max-width: 728px) {
    background-image: url(${ImgFullBannerLoginMobile});
  }
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
  @media screen and (max-width: 728px) {
    width: 100%;
    margin: 30% 0 0 0;
  }
`;

export const DivImgLog = styled.div`
  @media screen and (max-width: 728px) {
    width: 90%;
  }
`;

export const ImgLogo = styled.img`
  width: 100%;
`;

export const DivButton = styled.div`
  @media screen and (max-width: 728px) {
    margin: 50% 0 0 0;
  }
`;
