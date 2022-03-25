import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../LogIn/Login";

const PrivateRoute = ({ children }) => {
    const value = useContext(LoginContext);
    console.log(value)
  const user = false;
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
