import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-100 to-indigo-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section - Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-900 text-xl font-bold">
              E-Commerce
            </Link>

            {/* Desktop Navigation */}
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

            {/* Mobile Menu Toggle */}
            <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <XMarkIcon className="h-7 w-7 text-gray-700" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden mt-4 flex flex-col space-y-3 bg-white p-4 rounded-lg shadow-lg">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 transition duration-200 text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-gray-900 transition duration-200 text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/orders"
              className="text-gray-700 hover:text-gray-900 transition duration-200 text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              My Orders
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
