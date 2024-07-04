import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const AddProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.AddProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: "Product is added succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const GetAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const search = typeof searchTerm === "string" ? searchTerm : "";
    const result = await ProductServices.GetAllProductsFromDB(search);

    res.status(200).json({
      success: true,
      message: "Products are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

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
const DeleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.DeleteSingleProductFromDB(productId);

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

export const ProductControllers = {
  AddProduct,
  GetAllProducts,
  GetSingleProduct,
  DeleteSingleProduct,
};
