import { ProductModel } from "../product/product.model";
import { IOrder } from "./order.intrerface";
import { OrderModel } from "./order.model";

//CREATE ORDER
const CreateOrderIntoDB = async (data: IOrder) => {
  const { productId, quantity } = data;

  const productData = await ProductModel.findById(productId);

  if (!productData) {
    return { message: "Order not found" };
  }
  const productQuantity = productData.inventory.quantity - quantity;
  if (productQuantity < 0)
    return { message: "Insufficient quantity available in inventory" };

  if (productQuantity === 0) {
    await ProductModel.findByIdAndUpdate(productId, {
      "inventory.inStock": false,
    });
  }
  await ProductModel.findByIdAndUpdate(productId, {
    "inventory.quantity": productQuantity,
  });
  const result = await OrderModel.create(data);
  return result;
};

//GET ORDERS
const GetAllOrdersFromDB = async (email: string) => {
  if (email) {
    return await OrderModel.find({ email: email });
  }
  const result = await OrderModel.find();
  return result;
};
export const OrderService = {
  CreateOrderIntoDB,
  GetAllOrdersFromDB,
};
