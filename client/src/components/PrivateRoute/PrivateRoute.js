import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = sessionStorage.getItem('userEmail')
  return user ? <Outlet/> : <Navigate to="/login" replace/>;
};

export default PrivateRoute;
