import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 45%;
  height: 40px;
  padding: 1%;
  gap: 8px;
  align-items: center;

  border-radius: 5px;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  background: white;
  @media screen and (max-width: 728px) {
    gap: 2px;
    width: 85%;
    height: 30px;
    padding: 1.5%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 1%;
  padding: 0 0 0 3%;

  border-radius: 5px;
  outline: none;
  border: none;

  color: #bdbdbd;

  font-family: Sora;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.2px;

  @media screen and (max-width: 728px) {
    font-size: 0.8rem;
  }
`;

export const ImgSearch = styled.img`
  @media screen and (max-width: 728px) {
    width: 20px;
    margin: 0 0 0 2%;
  }
`;
export const ButtonImgGroup = styled.button`
  border: none;
  background: transparent;
  @media screen and (min-width: 728px) {
    display: none;
  }
`;

export const ImgGroup = styled.img`
  width: 20px;
  margin: 0 0 0 2%;
  @media screen and (min-width: 728px) {
    display: none;
  }
`;
