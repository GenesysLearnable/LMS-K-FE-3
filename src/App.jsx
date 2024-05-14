import { useState } from "react";
import "./App.css";
//import LandingPage from "./pages/landing_page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Childname from "./pages/childname";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Childname />}></Route>{" "}
          <Route exact path="/Login" element={<Login />}></Route>{" "}
        </Routes>
      </>
    </Router>
  );
}

export default App;
