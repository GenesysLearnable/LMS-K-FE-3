import React from "react";
import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/landing_page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./pages/sign_up/SignupForm";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>{" "}
          <Route exact path="/SignupForm" element={<SignupForm />}></Route>{" "}
        </Routes>
      </>
    </Router>
  );
}

export default App;
