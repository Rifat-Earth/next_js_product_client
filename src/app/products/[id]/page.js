"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://basic-nextjs-server.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-500">Loading product...</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-blue-600 text-lg font-semibold mb-6">
        Price: ${product.price}
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
      >
        ← Back to Products
      </button>
    </div>
  );
}
