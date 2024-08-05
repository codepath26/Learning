import React, { useState } from "react";

function HocHandler(Component) {
  return function WithHoc() {
    const [count, setCount] = useState(0);
    const countHandler = () => {
      setCount(count + 1);
    };
    return <Component count={count} countHandler={countHandler} />;
  };
}

export default HocHandler;
