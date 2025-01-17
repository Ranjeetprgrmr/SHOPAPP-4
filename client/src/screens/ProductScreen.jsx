import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function ProductScreen() {
  const { id } = useParams();
  console.log("this is id", id);
  const product = products.find((p) => p.id == id);
  console.log("this is product", product);
  return (
    <div className="container mx-auto mt-8 p-4">
      <Link to='/'>
        <button className="bg-gray-800 text-white py-2 px-4 rounded-md mb-4">
          Go Back
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1 mx-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-[470px] h-[470px] "
          />
        </div>
        <div className="md:col-span-1 text-start">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500 mr-1">{product.rating}</span>
            <span className="text-gray-600">{product.numReviews}</span>
          </div>
          <p className="text-gray-700 mt-2">
            Price: ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mt-2">Stock: {product.countInStock}</p>
          <div className="mt-4">
            <label htmlFor="quantity" className="text-gray-700">
              Quantity:
            </label>
            <select
              id="quantity"
              className="border border-gray-300 rounded-md px-2 py-1 ml-2"
            >
              {[...Array(product.countInStock).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
