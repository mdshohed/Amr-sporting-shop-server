import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";


const createProduct = catchAsync(async (req, res, next) => {
  // const zodParseData = UserValidation.userValidationSchema().parse(studentData);
  const result = await ProductServices.
  createProductIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK, 
    success: true, 
    message: 'Product is Created Successfully',
    data: result
  }); 
});

const updateProduct = catchAsync(async (req, res, next) => {
  // const zodParseData = UserValidation.userValidationSchema().parse(studentData);
  const {id} = req.params; 
  const result = await ProductServices.updateProductIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK, 
    success: true, 
    message: 'Product is Updated Successfully',
    data: result
  }); 
});


const getAllProduct = catchAsync(async(req, res, next)=>{
  const result = await ProductServices.getProductFromDB(); 
  console.log("getAll Product", result)
  
  sendResponse(res, {
    statusCode: httpStatus.OK, 
    success: true, 
    message: 'Product is retrieving Successfully',
    data: result
  }); 
})

const getSingleProduct = catchAsync(async(req, res, next)=>{
  const {id} = req.params; 
  const result = await ProductServices.getSingleProductFromDB(id); 
  sendResponse(res, {
    statusCode: httpStatus.OK, 
    success: true, 
    message: 'Product is Found Successfully',
    data: result
  }); 
})

const deleteProduct = catchAsync(async(req, res, next)=>{
  const {id} = req.params; 
  const result = await ProductServices.deleteProductFromDB(id); 
  sendResponse(res, {
    statusCode: httpStatus.OK, 
    success: true, 
    message: 'Product is deleted Successfully',
    data: result
  }); 
})

export const ProductControllers = {
  getAllProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct, 
};
