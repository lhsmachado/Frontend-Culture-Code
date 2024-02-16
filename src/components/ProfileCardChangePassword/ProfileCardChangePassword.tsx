import ButtonProps from "../Button/Button";
import * as S from "./ProfileCardChangePasswordStyle";
const ProfileCardChangePassword = () => {
  return (
    <S.Container>
      <div>
        <S.Title>Alterar Senha</S.Title>
      </div>
      <form>
        <S.ContainerInputs>
          <S.DivInputPassword>
            <S.LabelPassword htmlFor="">Senha atual</S.LabelPassword>
            <S.InputPassword
              type="password"
              placeholder="Digite sua senha atual"
            />
          </S.DivInputPassword>
          <S.DivInputPassword>
            <S.LabelPassword htmlFor="">Nova senha</S.LabelPassword>
            <S.InputPassword
              type="password"
              placeholder="Digite sua nova senha"
            />
          </S.DivInputPassword>
          <S.DivInputPassword>
            <S.LabelPassword htmlFor="">Confirmar nova senha</S.LabelPassword>
            <S.InputPassword
              type="password"
              placeholder="Digite novamente sua nova senha"
            />
          </S.DivInputPassword>
          <S.DivButton>
            <ButtonProps
              name={"Salvar Alterações"}
              customWidth="100%"
              customHeight="72px"
              customColors="#ffff"
              customFontFamily="Sora"
              customFontWeight="700"
              customFontsize="1.125rem"
              customBorder="none"
              customBorderRadius="16px"
              customPadding=""
              customBackground=" #502B6B"
              customBackgroundHover="#60357e"
              type="submit"
              isOpen={true}
            />
          </S.DivButton>
        </S.ContainerInputs>
      </form>
    </S.Container>
  );
};

export default ProfileCardChangePassword;
