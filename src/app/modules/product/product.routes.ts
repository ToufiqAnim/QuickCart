import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/add-product", ProductControllers.AddProduct);

router.get("/", ProductControllers.GetAllProducts);

router.get("/:productId", ProductControllers.GetSingleProduct);
router.delete("/:productId", ProductControllers.DeleteSingleProduct);

export const ProductRoutes = router;
