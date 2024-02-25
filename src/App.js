import React,{useState} from "react";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div className="App">
      <h1>Counter App</h1>
      <div className="counter-display">
        <p>Count: {count}</p>
      </div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
    </div>
  );
}

export default App;
