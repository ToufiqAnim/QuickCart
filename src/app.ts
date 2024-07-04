import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.routes";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.use("/api/v1/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
  next();
});
export default app;
