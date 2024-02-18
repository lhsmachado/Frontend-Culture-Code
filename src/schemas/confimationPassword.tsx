import * as yup from "yup";

export const confirmationPassword = yup.object({
  password: yup.string().required("O campo nova senha precisa ser preenchido"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais")
    .required("O campo de confirmação de senha precisa ser preenchido"),
});
