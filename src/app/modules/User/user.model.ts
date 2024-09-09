import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    deliveryAddress: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);


export const User = model<TUser>("User", UserSchema);
