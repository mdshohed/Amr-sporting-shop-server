import { z } from 'zod';

// Define validation for orderProductSchema
const orderProductSchema = z.object({
  productId: z.string().nonempty("Product ID is required"), // Mongoose uses ObjectId, but here we'll validate as a string.
  name: z.string().nonempty("Product name is required"),
  category: z.string().nonempty("Product category is required"),
  brand: z.string().nonempty("Product brand is required"),
  orderQuantity: z.number().positive("Quantity must be greater than zero"),
  unitPrice: z.number().positive("Unit price must be greater than zero"),
  tax: z.number().min(0, "Tax cannot be negative"), // Assuming tax can be zero but not negative
});

// Define validation for the main Order schema
export const createOrderValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email format"),
    phoneNumber: z.string().nonempty("Phone number is required"),
    deliveryAddress: z.string().nonempty("Delivery address is required"),
    orderProducts: z.array(orderProductSchema).nonempty("At least one product is required"),
  }),
});


export const updateOrderValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    deliveryAddress: z.string().optional(),
   
  }),
});
