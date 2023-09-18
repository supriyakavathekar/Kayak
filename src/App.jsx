// npm i react-router-dom

import React from "react";
// import react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Faq from './components/Faq';
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import About from './components/About';
import Tours from './components/Tours';
import Footer from './components/Footer';


import './App.css';

function App() {

  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Faq />} path="/faq" exact />
          <Route element={<Contact />} path="/contact" exact />
          <Route element={<About />} path="/about" exact />
          <Route element={<Tours />} path="/tours" exact /> 

        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;

