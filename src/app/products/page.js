"use client";
import { useEffect, useState } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>

            {products.length === 0 ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="p-4 border rounded-lg shadow hover:shadow-md transition"
                        >
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                            <p className="text-blue-600 font-semibold mt-3">
                                ${product.price}
                            </p>
                            <a
                                href={`/products/${product._id}`}
                                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Details
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
