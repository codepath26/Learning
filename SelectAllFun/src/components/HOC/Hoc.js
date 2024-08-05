import React from "react";
import Counter from "./Counter";
import Hover from "./Hover";

function Hoc() {
  return (
    <div className="border  border-black">
      <Counter />
      <Hover />
    </div>
  );
}

export default Hoc;
