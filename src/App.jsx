import "./App.css";
import LandingPage from "./pages/landing_page/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route path="/HomePage" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
