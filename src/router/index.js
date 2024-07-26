import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';
import About from "../screens/About";
import Login from "../screens/Login";
import Portfolio from "../screens/Portfolio";
import Blogs from "../screens/Blogs";
import Shop from "../screens/Shop";
// import Contact from "../screens/Contact";
import Register from "../screens/Register";
import ProductDetail from "../screens/ProductDetail";

const Router = () => {
  return (
    <BrowserRouter basename="gamingproject">
      <Routes>
      {/* gamingproject */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/shop" element={<Shop/>} />
        {/* <Route path="/contact-us" element={<Contact/>} /> */}
        <Route path="/registration" element={<Register/>} />
        <Route path="/product-detail" element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
