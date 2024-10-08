import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    price: 20,
    imageUrl: "/images/visitkort.jpg",
    image: "/images/visitkort.jpg",
  },
  {
    id: 2,
    name: "Visit Kort",
    price: 35,
    imageUrl: "/images/product2.jpg",
    image: "/images/product1.jpg",
  },
];

export default function Page() {
  return (
    <section className="text-center py-16 bg-pink-500 text-white">
      <h2 className="text-4xl mb-4">Some really cool products...</h2>
      <p className="mb-6"></p>
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        {products.map((product) => (
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
        ))}
      </div>
      <p className="mb-6"></p>
      <Link
        href="/"
        style={{
          backgroundColor: "pink",
          padding: "10px 20px",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
        }}
      >
        Go back
      </Link>
    </section>
  );
}
