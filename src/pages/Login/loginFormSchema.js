import * as yup from "yup";

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    // .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
});
