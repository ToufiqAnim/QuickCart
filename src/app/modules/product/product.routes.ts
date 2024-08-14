import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.AddProduct);

router.get("/", ProductControllers.GetAllProducts);

router.get("/:productId", ProductControllers.GetSingleProduct);
router.put("/:productId", ProductControllers.UpdateProduct);
router.delete("/:productId", ProductControllers.DeleteSingleProduct);

export const ProductRoutes = router;
