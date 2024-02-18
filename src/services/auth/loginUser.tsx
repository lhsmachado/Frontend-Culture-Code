import { api } from "../../hooks/axios/api";

export interface ILoginUser {
  email: string;
  password: string;
}

export const loginUser = async ({ email, password }: ILoginUser) => {
  try {
    const response = await api.post("/v1/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("access_token", response.data.access_token);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
