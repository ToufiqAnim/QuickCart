# QuickCart A E-commerce Backend App

This is an E-commerce backend application built with Express, TypeScript, Mongoose, and Zod.

**Live Demo**: [Quick Cart](https://quick-cart-puce.vercel.app/)

## Features

- Add products
- Retrieve all products
- Retrieve a product by ID
- Search products by term
- Create orders
- Retrieve all orders
- Retrieve orders by email

## Technologies Used

- **Express**: Fast, unopinionated, minimalist web framework for Node.js
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript
- **Mongoose**: Elegant MongoDB object modeling for Node.js
- **Zod**: TypeScript-first schema declaration and validation library

## Routes

### Product Routes

- **Add Product**

  - **Method**: POST
  - **Endpoint**: `/api/products/add-product`
  - **Description**: Adds a new product to the inventory.

- **Get All Products**

  - **Method**: GET
  - **Endpoint**: `/api/products`
  - **Description**: Retrieves all products.

- **Get Product by ID**

  - **Method**: GET
  - **Endpoint**: `/api/products/6686c52ed13980a6c4dae90a`
  - **Description**: Retrieves a product by its ID.

- **Update Product by ID**

  - **Method**: PUT
  - **Endpoint**: `/api/products/6686c52ed13980a6c4dae90a`
  - **Description**: Updates a product by its ID.

- **Delete Product by ID**

  - **Method**: DELETE
  - **Endpoint**: `/api/products/6686c523d13980a6c4dae905`
  - **Description**: Deletes a product by its ID.

- **Search Products**
  - **Method**: GET
  - **Endpoint**: `/api/products?searchTerm=Yoga `
  - **Description**: Searches for products based on a search term.

### Order Routes

- **Create Order**

  - **Method**: POST
  - **Endpoint**: `/api/orders/create-order`
  - **Description**: Creates a new order.

- **Get All Orders**

  - **Method**: GET
  - **Endpoint**: `/api/orders`
  - **Description**: Retrieves all orders.

- **Get Orders by Email**
  - **Method**: GET
  - **Endpoint**: `/api/orders?email=toufiq@gmail.com`
  - **Description**: Retrieves orders based on the email address.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root of the project and add your MongoDB connection string:

   ```env
   MONGODB_URI=your-mongodb-connection-string
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

### Adding a Product

Send a POST request to `/api/products/add-product` with the product details in the request body.

### Retrieving Products

- To retrieve all products, send a GET request to `/api/products`.
- To retrieve a product by ID, send a GET request to `/api/products/:id` with the product ID.
- To search for products, send a GET request to `/api/products?searchTerm=` with the search term.

### Creating an Order

Send a POST request to `/api/orders/create-order` with the order details in the request body.

### Retrieving Orders

- To retrieve all orders, send a GET request to `/api/orders`.
- To retrieve orders by email, send a GET request to `/api/orders?email=` with the email address.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License.
