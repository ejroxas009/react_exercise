import React from "react";

const Quantity = ({ addedItems, onIncrement, onDecrement, product }) => {
  return (
    <>
      <button onClick={() => onDecrement(product.id)}>-</button>
      <h4 style={{ marginLeft: "10px" }}>
        {addedItems.map((item) => {
          if (item.id === product.id) {
            return item.value;
          }
        })}
      </h4>
      <button onClick={() => onIncrement(product.id)}>+</button>
    </>
  );
};

export default Quantity;
