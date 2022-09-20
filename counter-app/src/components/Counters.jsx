import React from "react";
import Counter from "./Counter";

const Counters = ({
  counters,
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary ms-4 mt-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
