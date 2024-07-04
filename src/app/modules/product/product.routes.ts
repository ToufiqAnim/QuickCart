import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/add-product", ProductControllers.AddProduct);

router.get("/", ProductControllers.getAllProducts);

router.get("/:productId", ProductControllers.getSingleProduct);

export const ProductRoutes = router;
