import { api } from "../../../hooks/axios/api";
import { IGetUsersTypes } from "../../../types/getUsers/getUsers";

export const getUser = async (): Promise<IGetUsersTypes> => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const response = await api.get(`/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
