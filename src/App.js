import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className=' mx-auto shadow-md'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
