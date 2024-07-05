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
exports.OrderController = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = require("./order.service");
//CREATE ORDERS
const CreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const zodParseData = order_validation_1.OrderValidation.createOrderValidationSchema.parse(orderData);
        const result = yield order_service_1.OrderService.CreateOrderIntoDB(zodParseData);
        if (result === null || result === void 0 ? void 0 : result.message) {
            res.status(500).json({
                success: false,
                message: result === null || result === void 0 ? void 0 : result.message,
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Order Create Success",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: (error === null || error === void 0 ? void 0 : error.message) || "Something Went Wrong",
            error: error,
        });
    }
});
//GET ORDERS
const GetAllOrderFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const emailString = typeof email === "string" ? email : "";
        const result = yield order_service_1.OrderService.GetAllOrdersFromDB(emailString);
        if (email) {
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: (error === null || error === void 0 ? void 0 : error.message) || "Something Went Wrong",
            error: error,
        });
    }
});
exports.OrderController = {
    CreateOrder,
    GetAllOrderFromDB,
};
