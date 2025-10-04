"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Login</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
        <div className="flex flex-col-1 p-2 gap-4"> <img src="/images/icons8-google-color-32.png"/> <p>Sign in with Google</p></div>
        </button>
      </div>
    </div>
  );
}
