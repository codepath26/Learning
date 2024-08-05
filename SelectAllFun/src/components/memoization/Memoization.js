import React, { useCallback, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

function App() {
  //for the memoization.
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(40000);

  const ageHandler = useCallback(() => {
    setAge((prev) => prev + 1);
  }, []);
  const salaryHandler = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, []);

  return (
    <>
      <Title />
      <hr />
      <Count name="age" count={age} />
      <hr />
      <Button name="age" stateHandler={ageHandler} />
      <hr />
      <Count name="salary" count={salary} />
      <hr />
      <Button name="salary" stateHandler={salaryHandler} />
    </>
  );
}

export default App;
