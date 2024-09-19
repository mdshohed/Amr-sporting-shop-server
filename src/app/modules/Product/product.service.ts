import { Product } from "./product.model";
import { TProduct } from "./product.interface";

const createProductIntoDB = async(payload: TProduct) =>{
  const result = await Product.create(payload);
  return result; 
}

const updateProductIntoDB = async( id: string, payload: TProduct) =>{
  const result = await Product.findByIdAndUpdate(id, payload); 
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

const deleteProductFromDB = async (id: string) => {
  
  // const result = await Product.findByIdAndDelete( { id }, {isDeleted: true} );
  const result = await Product.findByIdAndDelete( id);
  return result;
}
// const updateProfileIntoDB = async (token: string, payload: Partial<TUser>) => {
//   // checking if the given token is valid


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
  updateProductIntoDB,
  deleteProductFromDB,
};
