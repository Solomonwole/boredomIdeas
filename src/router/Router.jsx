import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Donate from "../pages/Donate/Donate";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { RequireLoggedIn } from "../utils/Protect";
import { RedirectDashboard } from "../utils/ProtectCopy";

function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route element={<RedirectDashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />

        </Route>
        <Route path="/donate" element={<Donate />} />
        {/* PROTECTED ROUTE*/}
        <Route element={<RequireLoggedIn />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterPage;
