import Link from "next/link";
import CategoryCard from "./components/CategoryCard";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <section className="text-center py-16 bg-pink-500 text-white">
        <h2 className="text-4xl mb-4">Welcome to Miss Merch</h2>
        <p className="mb-6"></p>
        <Link
          href="/products"
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
          Shop Now
        </Link>
      </section>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Selected Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Business Cards"
            imageUrl="/business-cards.jpg"
            label="Business Cards"
          />
          <CategoryCard
            title="T-Shirt Design"
            imageUrl="/t-shirts.jpg"
            label="T-Shirts Design"
          />
          <CategoryCard
            title="Cup & Mug Design"
            imageUrl="/cups.jpg"
            label="Cup & Mug Design"
          />
        </div>
      </main>
    </>
  );
}
