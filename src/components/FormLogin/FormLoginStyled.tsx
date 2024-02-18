import styled from "styled-components";

export const Container = styled.div`
  width: 55%;

  @media screen and (max-width: 728px) {
    width: 96vw;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0 0 10% 0;
`;

export const TitleWelcome = styled.h4`
  font-family: Sora;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
  color: #3e4c76;
`;

export const Titlelogin = styled.h1`
  font-family: Sora;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.2px;
  color: #502b6b;
`;
export const DivContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 728px) {
    width: 96vw;
  }
`;
export const TitleErro = styled.p`
  color: red;
  font-family: Sora;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.2px;
`;

export const DivInputEmail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 72px;
  flex-shrink: 0;

  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 3px 5px 0px rgba(175, 178, 187, 0.2);
`;

export const LabelEmail = styled.label`
  position: absolute;
  top: 20%;
  left: 3%;
  color: #9e9e9e;

  font-family: Sora;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.2px;
`;

export const InputEmail = styled.input`
  width: 96.5%;
  height: 72px;
  padding: 5% 0 0 3%;

  border: none;
  background: transparent;
  outline: none;

  color: #212121;

  font-family: Sora;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
  border: 1px solid #b4b4b4;
  border-radius: 16px;

  &:focus {
    outline: none;
    border: 1px solid #00c247;
    border-radius: 16px;
  }
`;

export const DivInputPassword = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 72px;
  flex-shrink: 0;

  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 3px 5px 0px rgba(175, 178, 187, 0.2);
`;

export const LabelPassword = styled.label`
  position: absolute;
  top: 20%;
  left: 3%;
  color: #9e9e9e;

  font-family: Sora;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.2px;
`;

export const InputPassword = styled.input`
  width: 96.5%;
  height: 72px;
  padding: 5% 0 0 3%;

  border: none;
  background: transparent;
  outline: none;

  color: #212121;

  font-family: Sora;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
  border: 1px solid #b4b4b4;
  border-radius: 16px;

  &:focus {
    outline: none;
    border: 1px solid #00c247;
    border-radius: 16px;
  }
`;

export const DivButtonLogin = styled.div`
  width: 100%;
  margin: 6% 0 0 0;
`;
