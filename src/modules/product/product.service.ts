import { prisma } from "../../utils/prisma";
import { generateSlug } from "../../utils/slugGenerator";

const createProduct = async (payload: {
  name: string;
  description?: string;
  basePrice?: number;
  salePrice?: number;
  isActive?: boolean;
  categoryId: string;
}) => {
  const slug = generateSlug(payload.name);

  return prisma.product.create({
    data: {
      name: payload.name,
      slug,
      description: payload.description,
      basePrice: payload.basePrice,
      salePrice: payload.salePrice,
      isActive: payload.isActive ?? true,
      categoryId: payload.categoryId,
    },
    include: {
      category: true,
      images: true,
      variants: true,
    },
  });
};

const getAllProducts = async () => {
  return prisma.product.findMany({
    include: {
      category: true,
      images: true,
      variants: true,
    },
  });
};

const getProductById = async (id: string) => {
  return prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      images: true,
      variants: {
        include: {
          attributes: {
            include: {
              attributeValue: {
                include: {
                  attribute: true,
                },
              },
            },
          },
        },
      },
    },
  });
};

const updateProduct = async (
  id: string,
  payload: {
    name?: string;
    description?: string;
    basePrice?: number;
    salePrice?: number;
    isActive?: boolean;
    categoryId?: string;
  }
) => {
  const data: any = {};

  if (payload.name) {
    data.name = payload.name;
    data.slug = generateSlug(payload.name);
  }

  if (payload.description !== undefined) {
    data.description = payload.description;
  }

  if (payload.basePrice !== undefined) {
    data.basePrice = payload.basePrice;
  }

  if (payload.salePrice !== undefined) {
    data.salePrice = payload.salePrice;
  }

  if (payload.isActive !== undefined) {
    data.isActive = payload.isActive;
  }

  if (payload.categoryId) {
    data.categoryId = payload.categoryId;
  }

  return prisma.product.update({
    where: { id },
    data,
    include: {
      category: true,
      images: true,
      variants: true,
    },
  });
};

const deleteProduct = async (id: string) => {
  return prisma.product.delete({
    where: { id },
  });
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};