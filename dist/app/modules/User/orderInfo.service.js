"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfoServices = void 0;
const orderInfo_model_1 = require("./orderInfo.model");
const product_model_1 = require("../Product/product.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const createOrderIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("order", payload);
    const productDetails = payload.orderProducts;
    console.log(productDetails);
    for (const product of productDetails) {
        const id = product["productId"];
        const orderQuantity = product['orderQuantity'];
        if (!orderQuantity) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Product Not found in stock");
        }
        const findProduct = yield product_model_1.Product.findById(id);
        if (!findProduct) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Product Not found in stock");
        }
        const stockQuantity = findProduct === null || findProduct === void 0 ? void 0 : findProduct.stockQuantity;
        if (stockQuantity < orderQuantity) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, `${product["name"]} is out of stock!`);
        }
        const updateProduct = yield product_model_1.Product.findByIdAndUpdate(id, { stockQuantity: (stockQuantity - orderQuantity) }, { new: true });
        if (!updateProduct) {
            throw new AppError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, `Internal server Error!`);
        }
    }
    const result = yield orderInfo_model_1.Order.create(payload);
    // console.log("result",result);
    // const result = "";
    return result;
});
const getOrderFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orderInfo_model_1.Order.find();
    return result;
});
exports.OrderInfoServices = {
    getOrderFromDB,
    createOrderIntoDB,
};
