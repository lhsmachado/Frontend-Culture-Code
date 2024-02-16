import styled from "styled-components";

export const DivNavigate = styled.div`
  @media screen and (max-width: 728px) {
    display: none;
  }
`;

export const DivTitle = styled.div`
  width: 100%;
  margin: 5% 0 0 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 20% 0 0 0;
  }
`;

export const Title = styled.h1`
  color: rgb(33, 33, 33);
  font-family: Sora;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DivSearch = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2% 0 0 0;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 10% 0 0 0;
  }
`;

export const DivCardBalance = styled.div`
  display: flex;
  width: 100%;
  margin: 2% 0 0 0;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    margin: 5% 0 0 0;
  }
`;

export const TitleLoadingBance = styled.h4`
  color: rgb(33, 33, 33);
  font-family: Sora;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const DivSubBalance = styled.div`
  width: 14%;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const TitleLoadingCardProducts = styled.h4`
  margin: 5% 0 0 0;
  font-family: Sora;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
  text-align: center;
  color: rgb(33, 33, 33);

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DivCardProducts = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 30px;
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;

  @media screen and (max-width: 728px) {
    flex-direction: column;
    width: 100%;
    margin: 7% 0 0 0;
  }
`;
