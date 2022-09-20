import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";

const App = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 4,
    },
    {
      id: 2,
      value: 0,
    },
    {
      id: 3,
      value: 1,
    },
    {
      id: 4,
      value: 2,
    },
  ]);

  const handleIncrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }

        return counter;
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value - 1,
          };
        }

        return counter;
      })
    );
  };

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    setCounters(
      counters.map((counter) => {
        return {
          ...counter,
          value: 0,
        };
      })
    );
  };

  const getCountersWithValue = () => {
    return counters.filter((counter) => counter.value > 0);
  };

  return (
    <div>
      <Navbar totalCount={getCountersWithValue().length} />
      <div className="container">
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default App;
