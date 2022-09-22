import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Products from "../components/Products";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const ProductsPage = ({
  totalCount,
  products,
  onIncrement,
  onDecrement,
  addedItems,
}) => {
  return (
    <>
      <ResponsiveAppBar totalCount={totalCount} />
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item xs={4}>
          <Button
            variant="text"
            startIcon={<AddIcon />}
            LinkComponent={Link}
            to="/products/new"
          >
            Add Item
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Products
            products={products}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            addedItems={addedItems}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductsPage;
