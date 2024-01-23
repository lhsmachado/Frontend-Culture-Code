import styled from "styled-components";

interface IButtonProps {
  customWidth: string;
  customHeight: string;
  customPadding: string;
  customColors: string;
  customFontsize: string;
  customFontWeight: string;
}

export const Button = styled.button<IButtonProps>`
  width: ${(props) => props.customWidth};
  height: ${(props) => props.customHeight};
  padding: ${(props) => props.customPadding};
  color: ${(props) => props.customColors};
  font-size: ${(props) => props.customFontsize};
  font-weight: ${(props) => props.customFontWeight};
`;
