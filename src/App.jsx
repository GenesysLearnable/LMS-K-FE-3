import "./App.css";
import LandingPage from "./pages/landing_page/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import HomePage from "./pages/HomePage";
import Hiparent from "./pages/sign_up/Hiparent";
import Notice from "./pages/sign_up/Notice";

import SignupForm from "./pages/sign_up/SignupForm";
import Congrat from "./pages/sign_up/Congrat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Hiparent",
    element: <Hiparent />,
  },
  {
    path: "/Notice",
    element: <Notice />,
  },
  {
    path: "/SignupForm",
    element: <SignupForm />,
  },
  {
    path: "/Congrat",
    element: <Congrat />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
// return (
//   <Router>
//     <Routes>
//       <Route exact path="/" element={}></Route>
//       <Route exact path="/Login" element={<Login />}></Route>
//       <Route exact path="/Hiparent" element={<Hiparent />}></Route>
//       <Route exact path="/Notice" element={<Notice />}></Route>
//       <Route exact path="/SignupForm" element={<SignupForm />}></Route>
//       <Route exact path="/HomePage" element={<HomePage />}></Route>
//     </Routes>
//   </Router>
// );
