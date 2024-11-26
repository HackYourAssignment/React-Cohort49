import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <h1>Counter</h1>
      <Count count={count} />
      <Button onClick={addOne} text="Add 1!" />
      <p>{feedback}</p>
    </div>
  );
};

export default Counter;
