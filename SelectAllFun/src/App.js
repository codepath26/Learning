import React from "react";
// import Hoc from "./components/HOC/Hoc";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/ReactRouterDom/Home";
import About from "./components/ReactRouterDom/About";
import Contact from "./components/ReactRouterDom/Contact";
import Profile from "./components/ReactRouterDom/Profile";
// import Todo from "./components/Todo/Todo";

// function App() {
//   return (
//     <>
//       <Header />
//       <Hoc />
//       <hr />
//       <Todo />
//       <hr />
//       <div className="h-[200vh]"></div>
//     </>
//   );
// }
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
