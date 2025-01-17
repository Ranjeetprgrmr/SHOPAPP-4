import Product from "../components/Product";
import { products } from "../data/products";

export default function HomeScreen() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </div>
  );
}


// In programming, a callback function is a function that is passed as an argument to another function. The receiving function (in this case, map) will execute the callback function at a later point, usually with some specific data or context.

// Think of it like ordering food at a restaurant. You give the waiter your order (the callback function), and they take it to the kitchen. When your food is ready, the waiter (the map function) brings it back to you and "calls" you (executes the callback function) with the food (the data).

// In the context of the map function, the callback function is executed for each element in the array. The callback function receives the current element as an argument, and returns a new value that will be used to create a new array.

// the map function takes a callback function as an argument, which is executed for each product in the products array. The callback function returns a new Product component for each product, which is then rendered in the grid.