import React from "react";

const Counter = ({ counter, onDelete, onIncrement, onDecrement }) => {
  const getClassNames = () => {
    if (counter.value > 0) {
      return "badge bg-primary";
    }

    return "badge bg-warning text-dark";
  };

  const formatText = () => {
    const { value } = counter;
    if (value > 0) {
      return value;
    }

    return "Zero";
  };

  return (
    <div className="m-4">
      <span className={getClassNames()}>{formatText()}</span>
      <button
        onClick={() => onIncrement(counter.id)}
        className="btn btn-primary ms-4"
      >
        +
      </button>
      <button
        onClick={() => onDecrement(counter.id)}
        className="btn btn-secondary ms-1"
        disabled={counter.value === 0}
      >
        -
      </button>
      <button
        className="btn btn-danger ms-1"
        onClick={() => onDelete(counter.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
