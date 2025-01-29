// import the product type from Prisma
import { Product, Review, Image } from "@prisma/client";

import Stars from "@/components/product/Stars";
import ImageDisplay from "@/components/product/ImageDisplay";

export interface ProductViewProps extends Product {
  reviews: Review[];
  images: Image[];
}

// Allow the Product component to accept a product as a prop
export default async function ProductView({
  product,
}: {
  product: ProductViewProps;
}) {
  if (!product) {
    return <div>Product not found</div>;
  }
  // Calculate the average score of the product
  const totalScore = product.reviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  const averageScore = Math.floor(totalScore / product.reviews.length);

  // Get the image URLs
  const imageUrls = product.images.map((image) => image.url);

  return (
    <div className="grid gap-6">
      <ImageDisplay images={imageUrls} />
      <div className="grid gap-2">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {product.description}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold">${product.price}</span>
          <div className="flex items-center gap-0.5">
            <Stars rating={averageScore} />
          </div>
        </div>
      </div>
    </div>
  );
}
