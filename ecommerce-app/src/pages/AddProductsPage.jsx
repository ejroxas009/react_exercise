import React from "react";
import ProductForm from "../components/ProductForm";

const AddProductsPage = ({ onAddProduct }) => {
  return <ProductForm onSubmit={onAddProduct} />;
};

export default AddProductsPage;
