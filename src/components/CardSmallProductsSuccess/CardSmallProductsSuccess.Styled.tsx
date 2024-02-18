import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 728px) {
    margin: 0 auto;
    width: 90%;
  }
`;
export const DivImage = styled.div`
  @media screen and (max-width: 728px) {
    width: 80%;
    margin: 1% 0 0 0;
  }
`;
export const Imagem = styled.img`
  width: 100%;
`;
export const DivText = styled.div`
  @media screen and (max-width: 728px) {
    width: 100%;
    margin: 1% 0 0 0;
    padding: 3px 3px;
  }
`;
export const DivTitle = styled.div`
  width: 60%;
  margin: 5% 0 0 0;

  @media screen and (max-width: 728px) {
    width: 100%;
    margin: 1% 0 0 0;
  }
`;
export const Title = styled.h1`
  font-family: Sora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
  @media screen and (max-width: 728px) {
  }
`;

export const CardRedeemFor = styled.div`
  @media screen and (max-width: 728px) {
    width: 100%;
  }
`;
