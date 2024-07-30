import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';
import CricketMain from "../screens/CricketPage";

const Router = () => {
  return (
    <BrowserRouter basename="gamingproject">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cricket" element={<CricketMain/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
