import * as S from "./ProfileCardChangePasswordStyle";
import ButtonProps from "../Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { confirmationPassword } from "../../schemas/confimationPassword";
import {
  IChangePassword,
  changePassword,
} from "../../services/auth/changePassword";
import { useNavigate } from "react-router-dom";

const ProfileCardChangePassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(confirmationPassword) });

  const mutation = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      reset();
      alert("Senha alterada com sucesso ");
      navigate("/");
    },
    onError: () => {
      alert("Por favor, verifique se as senhas são iguais.");
    },
  });

  const onSubmit = (data: IChangePassword) => {
    mutation.mutateAsync(data);
  };
  return (
    <S.Container>
      <div>
        <S.Title>Alterar Senha</S.Title>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.ContainerInputs>
          <S.DivInputPassword>
            <S.LabelPassword htmlFor="">Senha atual</S.LabelPassword>
            <S.InputPassword
              type="password"
              placeholder="Digite sua senha atual"
            />
          </S.DivInputPassword>
          <S.TitleErro>{errors.password?.message}</S.TitleErro>
          <S.DivInputPassword>
            <S.LabelPassword htmlFor="">Nova senha</S.LabelPassword>
            <S.InputPassword
              type="password"
              placeholder="Digite sua nova senha"
              {...register("password")}
            />
          </S.DivInputPassword>
          <S.TitleErro>{errors.confirmPassword?.message}</S.TitleErro>
          <S.DivInputPassword>
            <S.LabelPassword htmlFor="">Confirmar nova senha</S.LabelPassword>
            <S.InputPassword
              type="password"
              placeholder="Digite novamente sua nova senha"
              {...register("confirmPassword")}
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
