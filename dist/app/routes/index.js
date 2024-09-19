"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_route_1 = require("../modules/Product/product.route");
const orderInfo_route_1 = require("../modules/User/orderInfo.route");
const stripe_route_1 = require("../modules/Stripe/stripe.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/order",
        route: orderInfo_route_1.OrderRoutes,
    },
    {
        path: "/products",
        route: product_route_1.ProductRoutes,
    },
    {
        path: "/create-payment-intent",
        route: stripe_route_1.StripeRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
