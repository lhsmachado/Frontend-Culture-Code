import { api } from "../../../hooks/axios/api";
import { IProductRescued } from "../../../types/PostProductRescued/PostProductRescued";

export const ProductRescued = async (
  productId: string | undefined,
  userId: string | undefined
): Promise<IProductRescued | undefined> => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    console.log("Access token:", accessToken);
    const response = await api.post(
      `/v1/products/${productId}/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
