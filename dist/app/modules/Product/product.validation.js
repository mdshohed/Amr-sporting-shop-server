"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductValidationSchema = exports.createProductValidationSchema = void 0;
const zod_1 = require("zod");
exports.createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        category: zod_1.z.string(),
        brand: zod_1.z.string(),
        stockQuantity: zod_1.z.number(),
        rating: zod_1.z.number(),
        productDescription: zod_1.z.string(),
        price: zod_1.z.number(),
        image: zod_1.z.string(),
        isAvailable: zod_1.z.boolean().optional(),
    }),
});
exports.updateProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        stockQuantity: zod_1.z.number().optional(),
        rating: zod_1.z.number().optional(),
        productDescription: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        image: zod_1.z.string().optional(),
    }),
});
