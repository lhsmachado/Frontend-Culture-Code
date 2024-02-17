import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivSearch = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: -3% 0 0 0;

  z-index: 0;

  @media screen and (max-width: 728px) {
    margin: -6% 0 0 0;
  }
`;

export const DivMediumBanner = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  margin: 8% 0 0 0;
  @media screen and (max-width: 728px) {
    margin: 15% 0 0 0;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  margin-top: 5%;

  @media screen and (max-width: 728px) {
    display: none;
  }
`;

export const Title = styled.h3`
  font-family: Sora;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
`;

export const DivTitleResponsive = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  width: 100%;
  margin-top: 5%;

  @media screen and (min-width: 728px) {
    display: none;
  }
`;
export const LoagingProducts = styled.h3`
  padding: 8% 0 0 6%;
  font-family: Sora;
  font-size: 1rem;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
`;

export const TitleResponsive = styled.h3`
  padding: 0 0 0 6%;
  font-family: Sora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
`;

export const LinkviewProducts = styled(Link)`
  padding: 0 6% 0 0;
  font-family: Sora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: #673cdf;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const DivCardProducts = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 30px;
  width: 80%;
  height: 50%;
  margin: 0 auto;
  margin-top: 2%;

  @media screen and (max-width: 728px) {
    flex-direction: column;
    width: 100%;
    margin: 2% 0 0 0;
  }
`;

export const DivPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 1% 0 5% 0;

  @media screen and (max-width: 728px) {
    margin: 1% 0 30% 0;
  }
`;
