import React from "react";
import SignUp from "./Pages/SignUp/SignUp";
import { Route, Router, Routes } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
};

export default App;
