import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes() {
  function userAuth() {
    const token = sessionStorage.getItem("token");
    return token;
  }

  const location = useLocation();
  const isAuth = userAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}

export default ProtectedRoutes;
