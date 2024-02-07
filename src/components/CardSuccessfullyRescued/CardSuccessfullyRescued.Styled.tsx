import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0 0 0;

  @media screen and (max-width: 728px) {
    flex-direction: column;
  }
`;

export const DivMyBalance = styled.div`
  margin: 5% 0 0 0;
  

  @media screen and (min-width: 728px) {
  }
`;
export const DivImage = styled.div`
  width: 40%;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 728px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 89%;
  @media screen and (max-width: 728px) {
    width: 80%;
  }
`;
export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  margin: 0 0 5% 0;

  @media screen and (max-width: 728px) {
    width: 100%;
  }
`;
export const DivTitleProduct = styled.div`
  @media screen and (max-width: 728px) {
    align-items: center;
    text-align: center;
  }
`;

export const DivCardSmallProductsSuccess = styled.div`
  margin: 5% 0 5% 0;

  @media screen and (max-width: 728px) {
  }
`;

export const Title = styled.h1`
  font-family: Sora;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
  @media screen and (max-width: 728px) {
    padding: 5px 5px;
  }
`;

export const DivCardRedeemFor = styled.div`
  margin: 3% 0 0 0;

  @media screen and (max-width: 728px) {
    padding: 0 0 0 2%;
  }
`;

export const DivTextDescription = styled.div`
  margin: 5% 0 0 0;

  width: 100%;

  @media screen and (max-width: 728px) {
    width: 70%;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }
`;

export const TextDescription = styled.p`
  font-family: Sora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
  @media screen and (max-width: 728px) {
    padding: 2% 2% 0 2%;
  }
`;

export const DivButton = styled.div`
  width: 40%;
  margin-top: 25%;

  @media screen and (max-width: 1368px) {
    margin-top: 20%;
  }

  @media screen and (max-width: 728px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 6%;
    margin-bottom: 3%;
  }
`;
