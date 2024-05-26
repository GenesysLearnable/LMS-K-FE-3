import "./App.css";
import Crypto from "./pages/payment/crypto";
import LandingPage from "./pages/landing_page/LandingPage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
import HomePage from "./pages/homepage/HomePage";
import AdminPage from "./pages/admin_page/AdminPage";
import Hiparent from "./pages/sign_up/Hiparent";
import SignupForm from "./pages/sign_up/SignupForm";
import Congrat from "./pages/sign_up/Congrat";
import ChildsName from "./pages/sign_up/ChildsName";
import ChildsAge from "./pages/sign_up/ChildsAge";
import Notice from "./pages/sign_up/Notice";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./ProtectedRoutes";

const token = sessionStorage.getItem("token");
const router = createBrowserRouter([
  {
    path:"/",
    element:<Crypto />
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Login",
    element: token ? <Navigate to="/HomePage" /> : <Login />,
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
    element: token ? <Navigate to="/HomePage" /> : <SignupForm />,
  },
  {
    path: "/Congrat",
    element: <Congrat />,
  },
  {
    path: "/ChildsName",
    element: <ChildsName />,
  },
  {
    path: "/ChildsAge",
    element: <ChildsAge />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/HomePage",
        element: <HomePage />,
      },
      {
        path: "/AdminPage",
        element: <AdminPage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <ToastContainer closeOnClick={true} />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
