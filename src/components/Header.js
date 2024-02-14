import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <header style={{position: "fixed", width: "100%"}} className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold">
            Fashion Store
          </a>
        </div>
        <nav>
          <ul className="flex items-center space-x-6">
            <Link
              to="/home"
            >
                Home
            </Link>
            <Link
              to="/products"
            >
                Products
            </Link>
            <Link
              to="/cart"
            >
                Cart
            </Link>
            <Link
              to="/login"
            >
                Login
            </Link>
            <Link
              to="/register"
            >
                Register
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
