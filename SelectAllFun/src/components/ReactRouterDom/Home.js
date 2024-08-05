import React, { useRef, useState } from "react";

function Home() {
  const mainboxRef = useRef();
  const [state, setState] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
  });
  const handleChange = () => {
    console.log(mainboxRef.current.checked);
    if (mainboxRef.current.checked === true) {
      setState({
        box1: true,
        box2: true,
        box3: true,
        box4: true,
      });
    } else {
      setState({
        box1: false,
        box2: false,
        box3: false,
        box4: false,
      });
    }
  };
  return (
    <>
      <div className="border border-green-700 m-3 flex flex-col gap-2 p-2">
        <div className="flex border m-auto">
          <label htmlFor="mainbox">select all</label>
          <input
            ref={mainboxRef}
            type="checkbox"
            id="mainbox"
            checked={state.box1 && state.box2 && state.box3 && state.box4}
            onChange={() => {
              handleChange();
            }}
          />
        </div>

        <div className="flex border m-auto">
          <label htmlFor="box1">box1</label>
          <input
            type="checkbox"
            id="box1"
            checked={state.box1}
            onChange={() => setState({ ...state, box1: !state.box1 })}
          />
        </div>
        <div className="flex border m-auto">
          <label htmlFor="box2">box2</label>
          <input
            type="checkbox"
            id="box2"
            checked={state.box2}
            onChange={() => setState({ ...state, box2: !state.box2 })}
          />
        </div>
        <div className="flex border m-auto">
          <label htmlFor="box3">box3</label>
          <input
            type="checkbox"
            id="box3"
            checked={state.box3}
            onChange={() => setState({ ...state, box3: !state.box3 })}
          />
        </div>
        <div className="flex border m-auto">
          <label htmlFor="box4">box4</label>
          <input
            type="checkbox"
            id="box4"
            checked={state.box4}
            onChange={() => setState({ ...state, box4: !state.box4 })}
          />
        </div>
      </div>
      <div className="text-center">
        <input type="text" className="border border-black" />
      </div>
    </>
  );
}

export default Home;
