import { model, Schema } from "mongoose";
import { TOrderInfo, TOrderProduct } from "./orderInfo.interface";

const orderProductSchema = new Schema<TOrderProduct>({
  productId: {
    type: Schema.Types.ObjectId,
    required: true, // corrected from 'require' to 'required'
    ref: 'Product',
  },
  name: {
    type: String,
    required: true // corrected
  },
  category: {
    type: String,
    required: true // corrected
  },
  brand: {
    type: String,
    required: true // corrected
  },
  orderQuantity: {
    type: Number,
    required: true // corrected
  },
  unitPrice: {
    type: Number,
    required: true // corrected
  },
  tax: {
    type: Number,
    required: true // corrected
  }
});

const OrderSchema = new Schema<TOrderInfo>(
  {
    name: {
      type: String,
      required: true, // corrected
    },
    email: {
      type: String,
      required: true, // corrected
    },
    phoneNumber: {
      type: String,
      required: true, // corrected
    },
    deliveryAddress: {
      type: String,
      required: true, // corrected
    },
    orderProducts: {
      type: [orderProductSchema],
      required: true, // corrected
    }
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrderInfo>("Order", OrderSchema);
