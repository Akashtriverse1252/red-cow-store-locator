import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/index.css";
import "../src/font/stylesheet.css";
import Home from "./Home";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  Aos.init();
  return (
    <Router>
      <Routes basename="/ice-cream/parlour-locator">
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
