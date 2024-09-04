import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import ProductDetails from './pages/ProductDetails'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path = "/details" element = {<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
