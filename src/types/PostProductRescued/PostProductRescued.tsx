import { IGetProducts } from "../getProducts/getProducts";

export interface IJewels {
    id: string;
    type: string;
    habilities: string;
    image: any;
    updatedAt: string;
    createdAt: string;
    count: number;
  }
  
  export interface IProductRescued {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImg: any;
    role: string;
    credits: number;
    deletedAt: any;
    updatedAt: string;
    createdAt: string;
    jewels: IJewels[];
    products: IGetProducts[];
  }
  