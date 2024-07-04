import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const AddProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const GetAllProductsFromDB = async (searchTerm: string) => {
  if (searchTerm) {
    return await ProductModel.find({
      name: { $regex: searchTerm, $options: "i" },
    });
  }
  const result = await ProductModel.find();
  return result;
};

const GetSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById({ _id: id });
  return result;
};

const UpdateProductToDB = async (id: string, data: IProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, data);
  return result;
};
const DeleteSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  AddProductIntoDB,
  GetAllProductsFromDB,
  GetSingleProductFromDB,
  UpdateProductToDB,
  DeleteSingleProductFromDB,
};
