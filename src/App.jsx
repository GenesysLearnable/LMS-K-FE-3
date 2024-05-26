import "./App.css";
import LandingPage from "./pages/landing_page/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import HomePage from "./components/Dashboard/HomePage";
import Hiparent from "./pages/sign_up/Hiparent";
import Notice from "./pages/sign_up/Notice";

import SignupForm from "./pages/sign_up/SignupForm";
import Congrat from "./pages/sign_up/Congrat";
import AppLayout from "./AppLayout";
import QuizPage from "./components/Dashboard/QuizPage";
import GamesPage from "./components/Dashboard/GamesPage";
import LearningPage from "./components/Dashboard/LearningPage";
import ProfilePage from "./components/Dashboard/ProfilePage";
import SettingsPage from "./components/Dashboard/SettingsPage";
import PlansPaymentPage from "./components/Dashboard/PlansPaymentPage";
import FeedBackPage from "./components/Dashboard/FeedBackPage";
import Logout from "./components/Dashboard/Logout";
import Phonics from "./components/Dashboard/Phonics";
import Math from "./components/Dashboard/Math";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      {
        path: "/QuizPage",
        element: <QuizPage />,
      },
      {
        path: "/LearningPage",
        element: <LearningPage />,
        children: [
          {
            index: true,
            path: "/LearningPage",
            element: <Phonics />,
          },
          {
            path: "/LearningPage/maths",
            element: <Math />,
          },
          {
            path: "/LearningPage/Phonics",
            element: <Phonics />,
          },
        ],
      },
      {
        path: "/GamesPage",
        element: <GamesPage />,
      },
      {
        path: "/ProfilePage",
        element: <ProfilePage />,
      },
      {
        path: "/SettingsPage",
        element: <SettingsPage />,
      },
      {
        path: "/PaymentPage",
        element: <PlansPaymentPage />,
      },
      {
        path: "/FeedBackPage",
        element: <FeedBackPage />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
    ],
  },

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

  { path: "/Notice", element: <Notice /> },
  {
    path: "/SignupForm",
    element: <SignupForm />,
  },
  {
    path: "/Hiparent/Congrat",
    element: <Congrat />,
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
