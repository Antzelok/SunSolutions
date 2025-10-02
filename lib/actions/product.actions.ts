import { prisma } from "@/db/prisma";

export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to load products");
  }
}
