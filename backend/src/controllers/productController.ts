import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProductsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;

  try {
    const products = await prisma.product.findMany({
      where: { category },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Database error', error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
    const { name, price, category } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    try {
      const product = await prisma.product.create({
        data: {
          name,
          price: parseFloat(price),
          category,
        },
      });
      res.status(201).json({ message: 'Product created', product });
    } catch (error) {
      res.status(500).json({ message: 'Database error', error });
    }
};
