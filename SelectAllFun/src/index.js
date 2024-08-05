import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import CustomHook from "./components/customHooks/CustomHooks";
// import Memoization from "./components/memoization/Memoization";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // <Memoization />
  // <CustomHook />
  // </React.StrictMode>
);

reportWebVitals();
