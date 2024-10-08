"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import { useState } from "react";
import Modal from "../components/Modal";
import ThreeDViewer from "../components/ThreeDViewer";

const products = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    price: 20,
    imageUrl: "/images/visitkort.svg",
    glbUrl: "/images/visitkort/visitkort.glb",
  },
  {
    id: 2,
    name: "Visit Kort",
    price: 35,
    imageUrl: "/images/martin.svg",
    glbUrl: "/images/demo_three.glb",
  },
];

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
              priority={false}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>

            <Button onClick={handleOpenModal} label="Visa i 3D" />

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <ThreeDViewer modelPath={product.glbUrl} />
            </Modal>

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
