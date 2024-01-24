import * as S from "../Login/LoginStyled";
import Icon from "../../assets/logotipo.svg";
import ButtonProps from "../../components/Button/Button";

export const Login = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.DivImgLog>
          <S.ImgLogo src={Icon} alt="Vector Icon" />
        </S.DivImgLog>
        <S.DivButton>
          <ButtonProps
            name="Fazer Login"
            customColors="#502B6B "
            customBackground="#DCB6F8"
            customFontWeight="700"
            customFontsize="1.2rem"
            customFontFamily="Sora"
            customHeight=""
            customPadding="6%"
            customWidth="21rem"
          />
        </S.DivButton>
      </S.Wrapper>
    </S.Container>
  );
};
