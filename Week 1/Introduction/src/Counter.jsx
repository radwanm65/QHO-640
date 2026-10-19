import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>You have clicked the counter {count} times </h2>

      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
