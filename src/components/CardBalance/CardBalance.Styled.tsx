import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const TitleBalance = styled.h4`
  color: #fff;
  text-align: center;
  font-family: Sora;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;

  @media screen and (max-width: 728px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0.2px;
  }
`;
export const TitleBalanceNumber = styled.h1`
  color: #dcb6f8;
  text-align: center;
  font-family: Guardians;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 124%;
  letter-spacing: -1.6px;

  @media screen and (max-width: 728px) {
    font-size: 40px;
  }
`;

export const TitleJewelry = styled.h4`
  color: #dcb6f8;
  text-align: center;
  font-family: Sora;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;
  @media screen and (max-width: 728px) {
    font-size: 12px;
  }
`;

export const DivNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 2%;
  gap: 10px;
  width: 407px;
  height: 40px;
  flex-shrink: 0;

  border-radius: 20px;
  background: rgba(23, 4, 26, 0.82);

  @media screen and (max-width: 728px) {
    width: 305px;
    height: 25px;
    margin-top: 3%;
  }
`;

export const ImgCalendar = styled.img`
  color: white;
  @media screen and (max-width: 728px) {
    width: 18px;
    height: 18px;
  }
`;

export const TextInformation = styled.h4`
  color: #fff;

  font-family: Sora;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.2px;

  @media screen and (max-width: 728px) {
    font-size: 14px;
  }
`;

export const TextValidation = styled.h4`
  padding: 1% 0 0 0;

  color: #fff;

  font-family: Sora;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;
  @media screen and (max-width: 728px) {
    font-size: 12px;
  }
`;
