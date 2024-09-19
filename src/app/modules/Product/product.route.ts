import express from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createProductValidationSchema, updateProductValidationSchema } from "./product.validation";

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

router.put(
  "/:id",
  validateRequest(updateProductValidationSchema),
  ProductControllers.updateProduct,
);

router.delete(
  "/:id",
  ProductControllers.deleteProduct,
);

router.get(
  "/:id",
  ProductControllers.getSingleProduct,
);


export const ProductRoutes = router;
