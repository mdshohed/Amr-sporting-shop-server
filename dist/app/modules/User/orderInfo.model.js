"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderProductSchema = new mongoose_1.Schema({
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true, // corrected from 'require' to 'required'
        ref: 'Product',
    },
    name: {
        type: String,
        required: true // corrected
    },
    category: {
        type: String,
        required: true // corrected
    },
    brand: {
        type: String,
        required: true // corrected
    },
    orderQuantity: {
        type: Number,
        required: true // corrected
    },
    unitPrice: {
        type: Number,
        required: true // corrected
    },
    tax: {
        type: Number,
        required: true // corrected
    }
});
const OrderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true, // corrected
    },
    email: {
        type: String,
        required: true, // corrected
    },
    phoneNumber: {
        type: String,
        required: true, // corrected
    },
    deliveryAddress: {
        type: String,
        required: true, // corrected
    },
    orderProducts: {
        type: [orderProductSchema],
        required: true, // corrected
    }
}, {
    timestamps: true,
});
exports.Order = (0, mongoose_1.model)("Order", OrderSchema);
