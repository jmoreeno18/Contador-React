import PropTypes from "prop-types";
import { useState } from "react";
import './styles/AppCounter.css'

export const AppCounter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleLess = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleLess}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

AppCounter.propTypes = {
  value: PropTypes.number.isRequired,
};
