import type React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-indigo-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section - Logo & Links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-900 text-xl font-bold">
              E-Commerce
            </Link>
            <div className="hidden sm:flex space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition duration-200 text-sm font-semibold"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-gray-900 transition duration-200 text-sm font-semibold"
              >
                Products
              </Link>
              <Link
                to="/orders"
                className="text-gray-700 hover:text-gray-900 transition duration-200 text-sm font-semibold"
              >
                My Orders
              </Link>
            </div>
          </div>

          {/* Right Section - Cart & Auth */}
          <div className="flex items-center space-x-6">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-gray-900 transition duration-200"
            >
              <ShoppingCartIcon className="h-7 w-7" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full shadow-md">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-400 hover:bg-red-500 transition duration-200 rounded-lg shadow-md"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 text-sm font-medium text-white bg-green-400 hover:bg-green-500 transition duration-200 rounded-lg shadow-md"
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
