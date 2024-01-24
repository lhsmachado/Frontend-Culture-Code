import * as S from "../Login/LoginStyled";
import Icon from "../../assets/logotipo.svg";
import ButtonProps from "../../components/Button/Button";

export const Login = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={Icon} alt="Vector Icon" />
        <ButtonProps
          name="Fazer Login"
          customColors="#502B6B "
          customBackground="#DCB6F8"
          customFontWeight="700"
          customFontsize="18px"
          customFontFamily="Sora"
          customHeight="72px"
          customPadding=""
          customWidth="382px"
        />
      </S.Wrapper>
    </S.Container>
  );
};
