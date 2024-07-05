import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { ProductValidation } from "./product.validation";

//ADD PRODUCTS
const AddProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const zodParseData =
      ProductValidation.AddProductValidationSchema.parse(productData);

    const result = await ProductServices.AddProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "Product is added succesfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      error: error,
    });
  }
};

// GET ALL PRODUCTS
const GetAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const search = typeof searchTerm === "string" ? searchTerm : "";
    const result = await ProductServices.GetAllProductsFromDB(search);

    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      error: error,
    });
  }
};

//GET SINGLE PRODUCTS
const GetSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.GetSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      error: error,
    });
  }
};

// DELETE SINGLE PRODUCT
const DeleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.DeleteSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      error: error,
    });
  }
};

//UPDATE PRODUCTS
const UpdateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    ProductValidation.UpdateProductValidationSchema.parse(productData);

    const result = await ProductServices.UpdateProductToDB(
      productId,
      productData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      error: error,
    });
  }
};

export const ProductControllers = {
  AddProduct,
  GetAllProducts,
  GetSingleProduct,
  DeleteSingleProduct,
  UpdateProduct,
};
