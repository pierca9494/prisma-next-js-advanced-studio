import { PrismaClient, Product } from "@prisma/client";
import { prisma } from "../prisma";
import { unstable_cache as cache, revalidateTag } from "next/cache";

interface CreateReviewInput {
  name: string;
  rating: number;
  content: string;
  productId: number;
}

export async function createReview(input: CreateReviewInput) {
  try {
    const newReview = await prisma.review.create({
      data: {
        name: input.name,
        content: input.content,
        rating: input.rating,
        product: {
          connect: {
            id: input.productId,
          },
        },
      },
    });
    revalidateTag("Product");
    return newReview;
  } catch (error) {
    console.error("Error creating product:", error);
    return new Error("Error creating product");
  }
}
