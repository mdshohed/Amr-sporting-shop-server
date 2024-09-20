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

export const ProductServices = {
  createProductIntoDB,
  getProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
