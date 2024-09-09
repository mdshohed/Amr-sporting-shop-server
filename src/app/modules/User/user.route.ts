import express from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createUserValidationSchema, updateUserValidationSchema } from "./user.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(createUserValidationSchema),
  UserControllers.createUser,
);

router.get(
  "/",
  validateRequest(updateUserValidationSchema),
  UserControllers.getUser,
);

export const UserRoutes = router;
