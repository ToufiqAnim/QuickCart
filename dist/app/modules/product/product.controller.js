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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
//ADD PRODUCTS
const AddProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const zodParseData = product_validation_1.ProductValidation.AddProductValidationSchema.parse(productData);
        const result = yield product_service_1.ProductServices.AddProductIntoDB(zodParseData);
        res.status(200).json({
            success: true,
            message: "Product is added succesfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: (error === null || error === void 0 ? void 0 : error.message) || "Something Went Wrong",
            error: error,
        });
    }
});
// GET ALL PRODUCTS
const GetAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const search = typeof searchTerm === "string" ? searchTerm : "";
        const result = yield product_service_1.ProductServices.GetAllProductsFromDB(search);
        const message = search
            ? `Products matching search term '${search}' fetched successfully!`
            : "Products fetched successfully!";
        res.status(200).json({
            success: true,
            message: message,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: (error === null || error === void 0 ? void 0 : error.message) || "Something Went Wrong",
            error: error,
        });
    }
});
//GET SINGLE PRODUCTS
const GetSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.GetSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: (error === null || error === void 0 ? void 0 : error.message) || "Something Went Wrong",
            error: error,
        });
    }
});
// DELETE SINGLE PRODUCT
const DeleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.ProductServices.DeleteSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: (error === null || error === void 0 ? void 0 : error.message) || "Something Went Wrong",
            error: error,
        });
    }
});
//UPDATE PRODUCTS
const UpdateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        product_validation_1.ProductValidation.UpdateProductValidationSchema.parse(productData);
        const result = yield product_service_1.ProductServices.UpdateProductToDB(productId, productData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: (error === null || error === void 0 ? void 0 : error.message) || "Something Went Wrong",
            error: error,
        });
    }
});
exports.ProductControllers = {
    AddProduct,
    GetAllProducts,
    GetSingleProduct,
    DeleteSingleProduct,
    UpdateProduct,
};
