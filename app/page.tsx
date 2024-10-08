import Link from "next/link";

export default function Home() {
  return (
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
  );
}
