import { api } from "../../../hooks/axios/api";
import { IGetProducts } from "../../../types/getProducts/getProducts";

export interface IGetProductsResponse {
  pages: number
  data: IGetProducts[];
}

export const getProducts = async (name: string | undefined ,page: number, limit: number): Promise<IGetProductsResponse | undefined > => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const response = await api.get(`/v1/products`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        name,
        page,
        limit,
        
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
