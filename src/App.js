import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/index.css";
import "../src/font/stylesheet.css";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
