import styled from "styled-components";

export const DivSearch = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: -3% 0 0 0;

  z-index: 2;

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

export const DivCardProducts = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin: 1% 0 0 0;
  align-items: center;

  @media screen and (max-width: 728px) {
    flex-direction: column;
    margin: 15% 0 0 0;
  }
`;
