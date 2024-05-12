import "./App.css";
import LandingPage from "./pages/landing_page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import HomePage from "./pages/HomePage";
import Hiparent from "./pages/sign_up/Hiparent";
import Notice from "./pages/sign_up/Notice";

import SignupForm from "./pages/sign_up/SignupForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Hiparent" element={<Hiparent />}></Route>
        <Route exact path="/Notice" element={<Notice />}></Route>
        <Route exact path="/SignupForm" element={<SignupForm />}></Route>
        <Route exact path="/HomePage" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
