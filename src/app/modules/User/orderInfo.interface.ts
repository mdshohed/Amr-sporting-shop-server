import { Types } from "mongoose";

export type TOrderProduct = {
  productId?: Types.ObjectId;
  name?: string;
  category?: string;
  brand?: string;
  orderQuantity?: number;
  unitPrice?: number;
  tax?: number; 
}

export interface TOrderInfo {
  name: string;
  email: string;
  phoneNumber: string;
  deliveryAddress: string;
  orderProducts: TOrderProduct[];
}

