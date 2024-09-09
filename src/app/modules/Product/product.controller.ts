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


const getAllProduct = catchAsync(async(req, res, next)=>{
  const result = await ProductServices.getProductFromDB(); 
  sendResponse(res, {
    statusCode: httpStatus.OK, 
    success: true, 
    message: 'Products is Found Successfully',
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

export const ProductControllers = {
  getAllProduct,
  getSingleProduct,
  createProduct,
};
