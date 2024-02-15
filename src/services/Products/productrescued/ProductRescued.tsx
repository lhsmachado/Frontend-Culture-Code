import { api } from "../../../hooks/axios/api";

export const ProductRescued = async (
  productId: string | undefined,
  userId: string | undefined
) => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    console.log('Access token:' ,accessToken)
    const response = await api.post(
      `/v1/products/${productId}/user/${userId}`,
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
