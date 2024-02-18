import { api } from "../../../hooks/axios/api";
import { IGetProductsId } from "../../../types/getProducts/TypesGetProductsId";

export const getProductsId = async (id:string): Promise<IGetProductsId | undefined> => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const response = await api.get(`/v1/products/${id}`, {
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
