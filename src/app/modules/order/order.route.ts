import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/create-order", OrderController.CreateOrder);
router.get("/", OrderController.GetAllOrderFromDB);

export const OrderRoutes = router;
