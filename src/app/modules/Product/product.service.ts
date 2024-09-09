import jwt, { JwtPayload } from "jsonwebtoken";
import { Product } from "./product.model";
import config from "../../config";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TProduct } from "./product.interface";

const createProductIntoDB = async(payload: TProduct) =>{
  const result = await Product.create(payload); 
  return result; 
}

const getProductFromDB = async () => {
  const result = await Product.find();
  return result;
};


const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById( id );
  return result;
}
// const updateProfileIntoDB = async (token: string, payload: Partial<TUser>) => {
//   // checking if the given token is valid

//   const decoded = jwt.verify(
//     token,
//     config.jwt_refresh_secret as string,
//   ) as JwtPayload;

//   const { userEmail } = decoded;

//   // checking if the user is exist
//   const user = await User.isUserExistsByCustomEmail(userEmail);

//   if (!user) {
//     throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
//   }
//   const filter = { email: userEmail };

//   // const result = await User.findByIdAndUpdate(filter, payload, {
//   const result = await User.findOneAndUpdate(filter, payload, {
//     new: true,
//     runValidators: true,
//   });
//   return result;
// };

export const ProductServices = {
  createProductIntoDB,
  getProductFromDB,
  getSingleProductFromDB,
};
