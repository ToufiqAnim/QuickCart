import { Request, Response } from "express";
import { OrderValidation } from "./order.validation";
import { OrderService } from "./order.service";

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParseData =
      OrderValidation.createOrderValidationSchema.parse(orderData);

    const result: any = await OrderService.CreateOrderIntoDB(zodParseData);

    if (result?.message) {
      res.status(500).json({
        success: false,
        message: result?.message,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Order Create Success",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      error: error,
    });
  }
};

const GetAllOrderFromDB = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const emailString = typeof email === "string" ? email : "";
    const result = await OrderService.GetAllOrdersFromDB(emailString);
    if (email) {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      error: error,
    });
  }
};

export const OrderController = {
  CreateOrder,
  GetAllOrderFromDB,
};
