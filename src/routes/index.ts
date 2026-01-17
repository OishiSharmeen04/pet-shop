import { Router } from "express";
import categoryRouter from "../modules/category/category.route";
import productRouter from "../modules/product/product.route";

const router = Router();

router.use("/categories", categoryRouter);
router.use("/products", productRouter);

export default router;
