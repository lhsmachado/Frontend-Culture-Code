import * as S from "../FormLogin/FormLoginStyled";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas/schameogin";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonProps from "../Button/Button";
import { ILoginUser, loginUser} from "../../services/auth/loginUser";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const FormLogin = () => {
 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async () => {
  
      reset();
      navigate("/home");
    },
    onError: async () =>{
      alert("Você não está autorizado a entrar. Verifique suas credenciais.");
    }
  });

  const onSubmit = (data: ILoginUser) => {
    mutation.mutate(data);
  };

  return (
    <S.Container>
      <S.DivTitle>
        <S.TitleWelcome>Seja bem vindo!</S.TitleWelcome>
        <S.Titlelogin>Faça seu login</S.Titlelogin>
      </S.DivTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.DivContainerInputs>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
          <S.DivInputEmail>
            <S.LabelEmail htmlFor="">E-mail</S.LabelEmail>
            <S.InputEmail
              type="text"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
          </S.DivInputEmail>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
          <S.DivInputPassword>
            <S.LabelPassword htmlFor="">Senha</S.LabelPassword>
            <S.InputPassword
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </S.DivInputPassword>
        </S.DivContainerInputs>
        <S.DivButtonLogin>
          <ButtonProps
            name={isSubmitting ? "Entrando..." : "Entrar"}
            customWidth="100%"
            customHeight="72px"
            customColors="#ffff"
            customFontFamily="Sora"
            customFontWeight="700"
            customFontsize="1.5rem"
            customBorder="none"
            customBorderRadius="16px"
            customPadding=""
            customBackground=" #502B6B"
            customBackgroundHover="#60357e"
            type="submit"
            isOpen={true}
          />
        </S.DivButtonLogin>
      </form>
    </S.Container>
  );
};

export default FormLogin;
