import { useState, useEffect } from "react";

function Counter({ startValue, endValue }) {
  const [counter, setCounter] = useState(startValue);

  useEffect(() => {
    setTimeout(() => {
      if (counter !== endValue) setCounter((prev) => prev + 1);
      else alert("Start value matches the end value.");
    }, 1001);

    return () => clearTimeout();
  }, [counter, endValue]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(startValue)}>Reset</button>
    </div>
  );
}

export default Counter;
