"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const orderInfo_controller_1 = require("./orderInfo.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const orderInfo_validation_1 = require("./orderInfo.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(orderInfo_validation_1.createOrderValidationSchema), orderInfo_controller_1.OrderControllers.createOrder);
router.get("/", 
// validateRequest(updateOrderValidationSchema),
orderInfo_controller_1.OrderControllers.getOrder);
exports.OrderRoutes = router;
