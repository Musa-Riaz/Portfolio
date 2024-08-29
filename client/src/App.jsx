import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </>
  );
};

export default App;
