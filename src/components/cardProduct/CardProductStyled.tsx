import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  

  margin: 0 0 5% 0;

  @media screen and (max-width: 728px) {
    flex-direction: row;
    width: 100%;
    
  }
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8% 0 0 0;
  width: 100%;
  height: 80px;
  gap: 5px;
  
`;
export const DivImg = styled.div`
  width: 100%;
  height: 150px;
  align-items: center;
  text-align: center;
  

  @media screen and (max-width: 728px) {
    width: 40%;
    display: flex;
    margin: 0 0 0 5%;
    align-items: center;
    text-align: center;
  }
`;
export const Image = styled.img`
  width: 60%;

  @media screen and (max-width: 728px) {
    width: 100%;
  }
`;

export const DivTitleButton = styled.div`
  @media screen and (max-width: 728px) {
    width: 270px;
    padding: 0 0 0 5%;
    
  }
`;

export const DivImgheart = styled.div`
  @media screen and (max-width: 728px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
  }
`;

export const Imgheart = styled.img`
  @media screen and (min-width: 728px) {
    display: none;
  }
`;

export const Title = styled.h3`
  font-family: Sora;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.2px;
  color: #212121;
`;

export const SubTitle = styled.h4`
  font-family: Sora;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.2px;
  color: #b1afaf;
  
`;

export const DivButtonProps = styled.div`
  margin: 10% 0 0 0;
  width: 100%;

  @media screen and (max-width: 728px) {
    width: 70%;
    margin: 5% 0 0 0;
   
  }
`;
