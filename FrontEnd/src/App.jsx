import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/user/homepage/Homepage";
import LogIn from "./pages/user/logIn/LogIn";
import SignUp from "./pages/user/signUp/SignUp";
import AllProducts from "./pages/user/all_products/AllProducts";
import SingleProductPage from "./pages/user/single_productPage/SingleProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/all_products" element={<AllProducts />} />
      <Route path="/single_product" element={<SingleProductPage />} />
    </Routes>
  );
};

export default App;
