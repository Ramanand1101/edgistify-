import type React from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon, TruckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const demoProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$59.99",
    image: "https://m.media-amazon.com/images/I/61+R5rOj9+L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$129.99",
    image: "https://m.media-amazon.com/images/I/51tYfgqTvOL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: "$89.99",
    image: "https://m.media-amazon.com/images/I/71iUUN3rSZL._AC_UF1000,1000_QL80_.jpg",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-wide">
            Welcome to <span className="text-yellow-300">Edgistify Store</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Discover amazing deals on top-quality products. Get the best offers now!
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              to="/products"
              className="px-6 py-3 text-lg font-semibold text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              to="/auth"
              className="px-6 py-3 text-lg font-semibold text-blue-700 bg-white hover:bg-gray-100 rounded-lg shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            Why Shop With Us?
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Your satisfaction is our priority. Enjoy top-notch services.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-md text-center">
              <ShoppingBagIcon className="h-12 w-12 text-blue-700 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Vast Product Range</h3>
              <p className="mt-2 text-gray-700">Choose from a diverse collection of premium products.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-orange-100 rounded-lg shadow-md text-center">
              <TruckIcon className="h-12 w-12 text-orange-700 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Super Fast Delivery</h3>
              <p className="mt-2 text-gray-700">Get your orders delivered in record time!</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-green-100 rounded-lg shadow-md text-center">
              <ShieldCheckIcon className="h-12 w-12 text-green-700 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">100% Secure Payments</h3>
              <p className="mt-2 text-gray-700">Shop with confidence using secure payment methods.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Catalogue Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            Explore Our Latest Products
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Handpicked collections just for you. Grab them before they run out!
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {demoProducts.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-lg text-blue-600 font-bold">{product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to start shopping?
          </h2>
          <p className="mt-4 text-lg text-yellow-300">
            Browse our latest collections and grab your favorites today.
          </p>
          <div className="mt-6">
            <Link
              to="/products"
              className="px-6 py-3 text-lg font-medium text-blue-700 bg-white rounded-lg shadow-md hover:bg-gray-100"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
