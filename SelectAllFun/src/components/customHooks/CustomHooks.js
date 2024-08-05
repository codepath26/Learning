import React from "react";
import useCount from "./useCount";

function App() {
  const { count, incrementCount, decrementCount } = useCount();

  return (
    <>
      <button onClick={decrementCount}>DecrementCount</button>
      <h1>Count : {count}</h1>
      <button onClick={incrementCount}>IncrementCount</button>
    </>
  );
}

export default App;
