import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Preencha com um email válido")
    .required("O campo email precisa ser preenchido"),
  password: yup.string().required("O campo senha precisa ser preenchido"),
});
