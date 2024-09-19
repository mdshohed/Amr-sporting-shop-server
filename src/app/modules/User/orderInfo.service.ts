import { Order } from "./orderInfo.model";
import { TOrderInfo } from "./orderInfo.interface";
import { Product } from "../Product/product.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createOrderIntoDB = async (payload: TOrderInfo) => {
  // console.log("order", payload);
  const productDetails = payload.orderProducts;
  console.log(productDetails);
  for (const product of productDetails) {
    const id = product["productId"];
    const orderQuantity = product['orderQuantity'] ;
    if (!orderQuantity) {
      throw new AppError(httpStatus.NOT_FOUND, "Product Not found in stock");
    }
    const findProduct = await Product.findById(id);
    if (!findProduct) {
      throw new AppError(httpStatus.NOT_FOUND, "Product Not found in stock");
    }
    const stockQuantity = findProduct?.stockQuantity;
   

    if ( stockQuantity < orderQuantity ) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        `${product["name"]} is out of stock!`
      );
    }

    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { stockQuantity: (stockQuantity - orderQuantity) },
      { new: true }
    );

    if (!updateProduct ) {
      throw new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        `Internal server Error!`
      );
    }
  }
  const result = await Order.create(payload);
  // console.log("result",result);
  // const result = "";
  return result;
};

const getOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};

export const OrderInfoServices = {
  getOrderFromDB,
  createOrderIntoDB,
};
