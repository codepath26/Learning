import React from "react";
import HocHandler from "./HocHandler";

function Hover({count , countHandler}) {
  return <>
  <h1>Hover: {count}</h1>
  <button onMouseOver={countHandler}>On Mouse Hover</button>
  </>;
}

export default HocHandler(Hover);
