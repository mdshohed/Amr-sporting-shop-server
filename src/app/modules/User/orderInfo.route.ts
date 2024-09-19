import express from "express";
import { OrderControllers } from "./orderInfo.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createOrderValidationSchema, updateOrderValidationSchema } from "./orderInfo.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(createOrderValidationSchema),
  OrderControllers.createOrder,
);

router.get(
  "/",
  // validateRequest(updateOrderValidationSchema),
  OrderControllers.getOrder,
);

export const OrderRoutes = router;
