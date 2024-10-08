import React from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  imageUrl: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      key={product.id}
      className="bg-white p-4 rounded shadow max-w-xs text-center"
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={200}
        height={200}
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
    </div>
  );
};

export default ProductCard;
