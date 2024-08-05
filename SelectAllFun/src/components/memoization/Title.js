import React from "react";

function Title() {
  console.log("title rerender...");
  return <div>Title</div>;
}

export default React.memo(Title);
