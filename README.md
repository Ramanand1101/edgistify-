# Edgistify Backend API

## Overview
This project is a backend API built with Node.js and Express, providing authentication, product management, cart operations, and order processing functionalities.

## Features
- **User Authentication** (Register, Login)
- **Product Management** (Add, Bulk Add)
- **Cart Operations** (Add to Cart, View Cart, Delete Items)
- **Order Processing** (Place Orders, Track Order Status)
- **Admin Routes** for managing users and orders
- **Database Connection** using MongoDB

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JSON Web Token (JWT) for authentication
- bcrypt.js for password hashing
- dotenv for environment variable management
- body-parser for parsing incoming request bodies
- cors for enabling CORS policy

## Installation

### Prerequisites
- Node.js installed
- MongoDB running locally or a remote MongoDB URI

### Steps
1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd <project_directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure environment variables:
   ```env
   PORT=5000
   MONGO_URI=<your_mongo_db_uri>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:5000/` by default.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive a token

### Products
- `POST /api/products/product/add` - Add a single product
- `POST /api/products/product/bulk-add` - Add multiple products in bulk

### Cart
- `POST /api/cart/add` - Add product to cart
- `GET /api/cart/` - View cart items
- `DELETE /api/cart/delete` - Clear cart
- `DELETE /api/cart/delete/:id` - Remove a specific item from cart

### Orders
- `POST /api/orders/place` - Place an order

## Middleware
- `authMiddleware` - Protects routes by verifying JWT
- `adminMiddleware` - Grants access to admin-only routes

## Running in Development Mode
Use Nodemon for auto-reloading:
```sh
npm run dev
```

## License
This project is licensed under the MIT License.

