import styled from "styled-components";

export const Title = styled.h1`
  align-items: center;
  text-align: center;
  font-family: Sora;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
  @media screen and (max-width: 728px) {
    font-size: 1.1rem;
  }
`;

export const Description = styled.h1`
  margin: 5% 0 0 0;
  align-items: center;
  text-align: center;
  font-family: Sora;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;

  color: #666565;
  @media screen and (max-width: 728px) {
    font-size: 0.9rem;
    margin: 8% 0 0 0;
  }
`;
export const TitleBalance = styled.strong`
  align-items: center;
  text-align: center;
  font-family: Sora;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;

  color: #60357e;
  @media screen and (max-width: 728px) {
    font-size: 1.1rem;
    margin: 8% 0 0 0;
  }
`;

export const ImgDiamont = styled.img`
  
  width: 15px;
  margin: 0 0 0 1%;
  

  @media screen and (max-width: 728px) {
    width: 13px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 30px;
  margin: 85px 0 0 0;

  @media screen and (max-width: 728px) {
    margin: 6% 0 0 0;
  }
`;
