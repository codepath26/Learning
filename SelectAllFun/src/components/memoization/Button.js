import React from "react";

function Button({ stateHandler, name }) {
  console.log(`button rerender ${name}`);
  return (
    <button
      onClick={() => {
        stateHandler();
      }}
    >
      Button
    </button>
  );
}

export default React.memo(Button);
