import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services";
import ProtectedRoute from "./pages/ProtectedRoute";
import Disposal from "./pages/disposal";
import WasteRecyclingPage from "./pages/recycling";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import ForgotPassword from "./pages/passwordReset/ForgotPassword";
import PasswordReset from "./pages/passwordReset/PasswordReset";
import Feedback from "./pages/feedBack";
// import Profile from "./pages/profile";
import NewsFeed from "./pages/newsFeed";
import ComingSoon from "./pages/comingSoon/Index";
import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/pagenotfound" element={<PageNotFound />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
      <Route path="/newsfeed" element={<NewsFeed />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="profile" element={<Profile />} />
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route element={<ProtectedRoute />}> */}
      {/* </Route> */}

      <Route path="disposal" element={<Disposal />} />
      {/* <Route path="profile" element={<Profile />} /> */}
      <Route path="/services" element={<Services />}>
        <Route path="disposal" element={<Disposal />} />
        <Route path="recycling" element={<WasteRecyclingPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
