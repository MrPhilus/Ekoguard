import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/services";
import ProtectedRoute from "../pages/ProtectedRoute";
import Disposal from "../pages/disposal";
import SignUp from "../pages/signUp";
import Login from "../pages/login";
import ForgotPassword from "../pages/passwordReset/ForgotPassword";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="/passwordreset" element={<PasswordReset />} />

      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route element={<ProtectedRoute />}> */}
      {/* </Route> */}

      {/* <Route path="disposal" element={<Disposal />} /> */}
      <Route path="/services" element={<Services />}>
        <Route path="disposal" element={<Disposal />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes;
