import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { RequireLoggedIn } from "../utils/Protect";

function RouterPage() {
  return (
    <Router>
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       

        {/* PROTECTED ROUTE*/}
        <Route element={<RequireLoggedIn />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterPage;
