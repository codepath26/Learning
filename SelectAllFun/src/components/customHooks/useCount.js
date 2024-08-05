import { useState } from "react";


function useCount() {
  const [count , setCount] = useState(0);
  const incrementCount = ()=>{
    setCount(prev => prev +1);
  }
  const decrementCount = ()=>{
    setCount(prev => prev -1);
  }

  return {count , incrementCount , decrementCount}
}

export default useCount;