import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../../App";

const PrivateRoute = ({ children }) => {
  const value = useContext(LoginContext);
  const user = value.email;
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
