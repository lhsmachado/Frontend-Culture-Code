import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 728px) {
    margin: 30% 0 0 0;
  }
`;

export const ImgUser = styled.img`
  border-radius: 50%;
  border: 5px solid #dcb6f8;
  width: 50px;
  height: 50px;
  object-fit: cover;

  @media screen and (max-width: 728px) {
    width: 32px;
    height: 32px;
    border: 1px solid #dcb6f8;
  }
`;

export const TitleNameUser = styled.h3`
  color: #fff;
  font-family: Sora;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  letter-spacing: 0.2px;
`;
