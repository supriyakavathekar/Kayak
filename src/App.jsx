// npm i react-router-dom

import React from "react";
// import react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";


import './App.css';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<About />} path="/about" exact />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

