"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const handleLogin = async () => {
    toast.info("Redirecting to Google login...");
    await signIn("google");
  };

  const handleLogout = async () => {
    toast.success("Logged out successfully!");
    await signOut();
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyProduct
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`${pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700"
                } hover:text-blue-600`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`${pathname === "/products"
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
                } hover:text-blue-600`}
            >
              Products
            </Link>
            <Link
              href="/dashboard/add-product"
              className="block px-4  text-gray-700 hover:bg-blue-50"
              onClick={() => setIsOpen(false)}
            >
              Add Products
            </Link>
            {session ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/dashboard/add-product"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            Add Products
          </Link>


          {session ? (
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout;
              }}
              className="bg-red-500 w-full text-white px-4 py-2 mt-2 hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogin
              }}
              className="bg-blue-500 w-full text-white px-4 py-2 mt-2 hover:bg-blue-600"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
