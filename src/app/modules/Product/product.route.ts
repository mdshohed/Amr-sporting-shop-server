import express from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createProductValidationSchema } from "./product.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(createProductValidationSchema),
  ProductControllers.createProduct,
);

router.get(
  "/",
  ProductControllers.getAllProduct,
);

router.get(
  "/:id",
  ProductControllers.getSingleProduct,
);


export const ProductRoutes = router;
