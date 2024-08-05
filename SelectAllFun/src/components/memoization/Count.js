import React from "react";

function Count({ count, name }) {
  console.log(`${name} rerender`);
  return (
    <div>
      {name} : {count}
    </div>
  );
}

export default React.memo(Count);
