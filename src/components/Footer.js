"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-blue-500">MyProduct</h1>
            <p className="text-gray-400 mt-1">© {new Date().getFullYear()} MyProduct. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/products" className="hover:text-blue-400">Products</Link>
            <Link href="/login" className="hover:text-blue-400">Login</Link>
            <Link href="/dashboard/add-product" className="hover:text-blue-400">Add Product</Link>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Built with Next.js 15 & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
