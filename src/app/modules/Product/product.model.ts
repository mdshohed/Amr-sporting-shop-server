import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      unique: true,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    stockQuantity: {
      type: Number,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    productDescription: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    isAvailable: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

// userSchema.pre("save", async function (next) {
//   // @typescript-eslint/no-this-alias
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });

// userSchema.post("save", async function (doc, next) {
//   doc.password = "";
//   next();
// });

// userSchema.statics.isUserExistsByCustomEmail = async function (email: string) {
//   return await User.findOne({ email }).select("+password");
// };

// userSchema.statics.isPasswordMatched = async function (
//   plainTextPassword,
//   hashedPassword,
// ) {
//   return await bcrypt.compare(plainTextPassword, hashedPassword);
// };

export const Product = model<TProduct>("Product", ProductSchema);
