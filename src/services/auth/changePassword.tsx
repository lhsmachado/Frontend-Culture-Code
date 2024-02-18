import { api } from "../../hooks/axios/api";

export interface IChangePassword {
  password: string;
  confirmPassword: string;
}

export const changePassword = async ({
  password,
  confirmPassword,
}: IChangePassword) => {
  try {
    const accessToken = localStorage.getItem("access_token") || null;
    const response = await api.patch(
      "/v1/users/me",
      { password, confirmPassword },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
