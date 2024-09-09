import { z } from "zod";

export const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    brand: z.string(),
    stockQuantity: z.number(),
    rating: z.number(),
    productDescription: z.string(),
    price: z.number(),
    image: z.string(),
    isAvailable: z.boolean(),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    brand: z.string().optional(),
    stockQuantity: z.number().optional(),
    rating: z.number().optional(),
    productDescription: z.string().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
    isAvailable: z.string().optional(),
  }),
});
