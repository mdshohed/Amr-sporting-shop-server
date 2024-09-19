"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(product_validation_1.createProductValidationSchema), product_controller_1.ProductControllers.createProduct);
router.get("/", product_controller_1.ProductControllers.getAllProduct);
router.put("/:id", (0, validateRequest_1.default)(product_validation_1.updateProductValidationSchema), product_controller_1.ProductControllers.updateProduct);
router.delete("/:id", product_controller_1.ProductControllers.deleteProduct);
router.get("/:id", product_controller_1.ProductControllers.getSingleProduct);
exports.ProductRoutes = router;
