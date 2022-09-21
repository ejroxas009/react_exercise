import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Products from "./components/Products";
import { useEffect, useState } from "react";

import { PRODUCTS_DATA } from "./data/products";

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const newItem = products.map((product) => {
      return { id: product.id, value: 0 };
    });
    setAddedItems(newItem);
  }, []);
  console.log(addedItems);

  const handleIncrement = (id) => {
    setAddedItems(
      addedItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            value: item.value + 1,
          };
        }
        return item;
      })
    );
    console.log(addedItems);
  };

  const handleDecrement = (id) => {
    setAddedItems(
      addedItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            value: item.value - 1,
          };
        }
        return item;
      })
    );
    console.log(addedItems);
  };

  const getItemsWithValue = () => {
    return addedItems.filter((item) => item.value > 0);
  };

  return (
    <div>
      <ResponsiveAppBar totalCount={getItemsWithValue().length} />
      <Products
        products={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        addedItems={addedItems}
      />
    </div>
  );
}

export default App;
