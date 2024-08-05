import React from "react";
import HocHandler from "./HocHandler";

function Counter({ count, countHandler }) {
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={countHandler}>Click To Incrment</button>
    </>
  );
}

export default HocHandler(Counter);
