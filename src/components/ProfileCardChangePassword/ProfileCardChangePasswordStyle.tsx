import styled from "styled-components";

export const Container = styled.div`
  height: 35rem;
  width: 31rem;
  border-radius: 3rem;
  background-color: #ffffff;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  padding-left: 4rem;
  padding-top: 3.75rem;

  @media screen and (max-width: 728px) {
    padding-left: 0;
    padding-top: 2.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3rem 3rem 0 0;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  font-family: Sora;
  color: #212121;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
`;

export const DivInputPassword = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 21rem;
  height: 72px;
  flex-shrink: 0;

  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 3px 5px 0px rgba(175, 178, 187, 0.2);
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

export const DivButton = styled.div`
  width: 21rem;
`;
