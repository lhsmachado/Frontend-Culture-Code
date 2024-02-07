import * as S from "../Login/LoginStyled";
import Icon from "../../assets/logotipo.svg";
import ButtonProps from "../../components/Button/Button";
import CardLogin from "../../components/CardLogin/CardLogin";
import { useState } from "react";

const Login = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const [buttonOpen, setButtonOpen] = useState(true);

  const handlebutton = () => {
    setCardOpen(true);
    setButtonOpen(false);
  };

  return (
    <S.Container>
      <S.DivSub>
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
              customBorderRadius="16px"
              customBorder="none"
              customHeight=""
              customPadding="6%"
              customWidth="21rem"
              customBackgroundHover="#d4a3f6"
              onClick={handlebutton}
              isOpen={buttonOpen}
            />
          </S.DivButton>
        </S.Wrapper>
        {cardOpen ? (
          <S.DivCardLogin
            initial={{ x: "100%" }}
            animate={{ x: cardOpen ? "0%" : "-100%" }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <CardLogin />
          </S.DivCardLogin>
        ) : null}
        {cardOpen ? (
          <S.DivCardLoginMobile
            initial={{ y: "100%" }}
            animate={{ y: cardOpen ? "0%" : "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <CardLogin />
          </S.DivCardLoginMobile>
        ) : null}
      </S.DivSub>
    </S.Container>
  );
};
export default Login;
