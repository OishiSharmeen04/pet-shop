import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { catchAsync } from "../../utils/asyncHandler";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req.body);
  res.status(201).json({
    success: true,
    data: result,
  });
});

const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts();
  res.json({ 
    success: true, 
    data: result 
  });
});

const getProductById = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getProductById(req.params.id);
  res.json({ 
    success: true, 
    data: result 
  });
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.updateProduct(
    req.params.id,
    req.body
  );
  res.json({ 
    success: true, 
    data: result 
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.deleteProduct(req.params.id);
  res.json({ 
    success: true, 
    data: result 
  });
});

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};