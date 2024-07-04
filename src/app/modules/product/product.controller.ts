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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: "Products are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

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
  getAllProducts,
  getSingleProduct,
};
