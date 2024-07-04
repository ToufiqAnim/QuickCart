import { model, Schema } from "mongoose";
import { IOrder } from "./order.intrerface";

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);
export const OrderModel = model<IOrder>("Order", orderSchema);
