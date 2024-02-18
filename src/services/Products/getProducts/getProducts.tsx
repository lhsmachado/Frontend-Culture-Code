import { api } from "../../../hooks/axios/api";
import { IGetProducts } from "../../../types/getProducts/getProducts";

export interface IGetProductsResponse {
  pages: number;
  data: IGetProducts[];
}

interface IGetProductsParams {
  name?: string | undefined;
  page?: number;
  limit?: number;
  price?: number | undefined;
}

export const getProducts = async ({
  name,
  page,
  limit,
  price,
}: IGetProductsParams): Promise<IGetProductsResponse | undefined> => {
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
        price,
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
