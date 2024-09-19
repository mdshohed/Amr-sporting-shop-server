"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderValidationSchema = exports.createOrderValidationSchema = void 0;
const zod_1 = require("zod");
// Define validation for orderProductSchema
const orderProductSchema = zod_1.z.object({
    productId: zod_1.z.string().nonempty("Product ID is required"), // Mongoose uses ObjectId, but here we'll validate as a string.
    name: zod_1.z.string().nonempty("Product name is required"),
    category: zod_1.z.string().nonempty("Product category is required"),
    brand: zod_1.z.string().nonempty("Product brand is required"),
    orderQuantity: zod_1.z.number().positive("Quantity must be greater than zero"),
    unitPrice: zod_1.z.number().positive("Unit price must be greater than zero"),
    tax: zod_1.z.number().min(0, "Tax cannot be negative"), // Assuming tax can be zero but not negative
});
// Define validation for the main Order schema
exports.createOrderValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty("Name is required"),
        email: zod_1.z.string().email("Invalid email format"),
        phoneNumber: zod_1.z.string().nonempty("Phone number is required"),
        deliveryAddress: zod_1.z.string().nonempty("Delivery address is required"),
        orderProducts: zod_1.z.array(orderProductSchema).nonempty("At least one product is required"),
    }),
});
exports.updateOrderValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        phoneNumber: zod_1.z.string().optional(),
        deliveryAddress: zod_1.z.string().optional(),
    }),
});
