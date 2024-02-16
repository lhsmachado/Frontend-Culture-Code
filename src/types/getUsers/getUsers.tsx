import { IProfileJewel } from "../ProfilePage/jewels";
import { IProfileRedeemCard } from "../ProfilePage/productRedeems";

export interface IGetUsersTypes {
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
  jewels: IProfileJewel[];
  products: IProfileRedeemCard[];
}
