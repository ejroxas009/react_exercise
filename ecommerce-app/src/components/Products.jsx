import React from "react";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";

const Products = ({ products, onIncrement, onDecrement, addedItems }) => {
  return (
    <React.Fragment key={products.id}>
      <br />
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item xs={4}>
              <ProductItem
                product={product}
                key={product.id}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                addedItems={addedItems}
              />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default Products;
