import { Model } from "mongoose";

export interface TProduct {
  name: string;
  description: string;
  category: string;
  brand: string;
  stockQuantity: number;
  rating: number; 
  productDescription: string;
  price: number;
  image: string;
  isAvailable?: boolean;
}

// @typescript-eslint/no-unused-vars
