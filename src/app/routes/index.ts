import { Router } from "express";
import { ProductRoutes } from "../modules/Product/product.route";
import { OrderRoutes } from "../modules/User/orderInfo.route";
import { StripeRoutes } from "../modules/Stripe/stripe.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/order",
    route: OrderRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/create-payment-intent",
    route: StripeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
