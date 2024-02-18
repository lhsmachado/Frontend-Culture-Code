import styled from "styled-components";
import ImgFullBannerLogin from "../../assets/fullBannerLogin.png";
import ImgFullBannerLoginMobile from "../../assets/fullBannerLoginMobile.png";
import { motion } from "framer-motion";

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
    z-index: -1;
  }

  background-image: url(${ImgFullBannerLogin});
  background-size: cover;
  background-position: center;
  z-index: 0;

  @media screen and (max-width: 728px) {
    background-image: url(${ImgFullBannerLoginMobile});
  }
`;

export const DivSub = styled.div`
  display: flex;

  @media screen and (max-width: 728px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 51px;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 729px) {
    width: 100%;
    height: 100vh;
  }
`;

export const DivImgLog = styled.div`
  @media screen and (max-width: 728px) {
    width: 90%;
  }
`;

export const ImgLogo = styled.img`
  width: 100%;
  @media screen and (max-width: 728px) {
    padding: 5% 0 0 0;
  }
`;

export const DivButton = styled.div`
  @media screen and (max-width: 728px) {
    position: absolute;
    top: 85%;
  }
`;

export const DivCardLogin = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  border-radius: 32px 0px 0px 32px;
  background: #ffffff;

  @media screen and (max-width: 728px) {
    display: none;
  }
`;

export const DivCardLoginMobile = styled(motion.div)`
  width: 100%;
  height: 190vh;

  border-radius: 32px 32px 0px 0px;
  background: #ffffff;

  @media screen and (min-width: 728px) {
    display: none;
  }
`;
