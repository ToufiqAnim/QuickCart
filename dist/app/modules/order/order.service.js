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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
//CREATE ORDER
const CreateOrderIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = data;
    const productData = yield product_model_1.ProductModel.findById(productId);
    if (!productData) {
        return { message: "Order not found" };
    }
    const productQuantity = productData.inventory.quantity - quantity;
    if (productQuantity < 0)
        return { message: "Insufficient quantity available in inventory" };
    if (productQuantity === 0) {
        yield product_model_1.ProductModel.findByIdAndUpdate(productId, {
            "inventory.inStock": false,
        });
    }
    yield product_model_1.ProductModel.findByIdAndUpdate(productId, {
        "inventory.quantity": productQuantity,
    });
    const result = yield order_model_1.OrderModel.create(data);
    return result;
});
//GET ORDERS
const GetAllOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        return yield order_model_1.OrderModel.find({ email: email });
    }
    const result = yield order_model_1.OrderModel.find();
    return result;
});
exports.OrderService = {
    CreateOrderIntoDB,
    GetAllOrdersFromDB,
};
