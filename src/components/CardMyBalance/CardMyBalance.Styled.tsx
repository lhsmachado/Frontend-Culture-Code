import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const DivLink = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;

  padding: 0 0 0 5%;
`;

export const DivBalance = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 5% 0 0;
    gap: 0px;
  }
`;

export const TextBalance = styled.h4`
  font-family: Sora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
`;

export const Number = styled.h4`
  font-family: Sora;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;

  @media screen and (max-width: 768px) {
    padding: 0 0 0 5%;
  }
`;
