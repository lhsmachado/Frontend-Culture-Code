import styled from "styled-components";

interface ICardPerfil {
customColors:string


}

export const Container = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 728px) {
    margin: 25% 0 0 0;
  }
`;

export const ImgUser = styled.img`
  border-radius: 50%;
  border: 2px solid #dcb6f8;
  width: 50px;
  height: 50px;
  object-fit: cover;

  @media screen and (max-width: 728px) {
    width: 32px;
    height: 32px;
    border: 1px solid #dcb6f8;
  }
`;

export const TitleNameUser = styled.h3<ICardPerfil>`
  color: ${(props) => props.customColors};
  font-family: Sora;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  letter-spacing: 0.2px;
  @media screen and (max-width: 728px) {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const TitleNameStrong = styled.strong<ICardPerfil>`
 color: ${(props) => props.customColors};

`
