import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const AddProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById({ _id: id });
  return result;
};

export const ProductServices = {
  AddProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
};
