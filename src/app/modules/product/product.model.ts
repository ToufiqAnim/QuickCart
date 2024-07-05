import { Schema, model } from "mongoose";
import { IInventory, IProduct, IVariant } from "./product.interface";

const variantSchema = new Schema<IVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<IInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true, _id: false },
    inventory: { type: inventorySchema, required: true, _id: false },
  },
  {
    toJSON: { virtuals: true },
  }
);

export const ProductModel = model<IProduct>("Product", productSchema);
