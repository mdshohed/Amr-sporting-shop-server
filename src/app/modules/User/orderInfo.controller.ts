import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderInfoServices } from "./orderInfo.service";

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderInfoServices.createOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Created successfully",
    data: result,
  });
});

const getOrder = catchAsync(async (req, res) => {
  const result = await OrderInfoServices.getOrderFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order get successfully",
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getOrder,
};
