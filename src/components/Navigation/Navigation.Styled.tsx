import { Link } from "react-router-dom";
import styled from "styled-components";

interface INavigatioStyled {
  customColors: string
}

export const Conatainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  margin: 2% 0 0 0;
  padding: 0 8% 0 8%;
`;

export const DivLinksNavigation = styled.div`
  display: flex;
  gap: 48px;

  @media screen and (max-width: 728px) {
    display: none;
  }
`;

export const Links = styled(Link)<INavigatioStyled>`
  color: ${(props) => props.customColors};

  font-family: Sora;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;

  text-decoration: none;
`;
