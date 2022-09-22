import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Products from "./components/Products";
import { useEffect, useState } from "react";

import { PRODUCTS_DATA } from "./data/products";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AddProductsPage from "./pages/AddProductsPage";

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const newItem = products.map((product) => {
      return { id: product.id, value: 0 };
    });
    setAddedItems(newItem);
  }, []);

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
  };

  const getItemsWithValue = () => {
    return addedItems.filter((item) => item.value > 0);
  };

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />}></Route>
        <Route
          path="/products"
          element={
            <ProductsPage
              totalCount={getItemsWithValue().length}
              products={products}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              addedItems={addedItems}
            />
          }
        ></Route>
        <Route
          path="products/new"
          element={<AddProductsPage onAddProduct={handleAddProduct} />}
        ></Route>
      </Routes>
      {/* <ResponsiveAppBar totalCount={getItemsWithValue().length} />
      <Products
        products={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        addedItems={addedItems}
      /> */}
    </div>
  );
}

export default App;
