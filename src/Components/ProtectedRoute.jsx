import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userName = localStorage.getItem("userName");
  return userName ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
