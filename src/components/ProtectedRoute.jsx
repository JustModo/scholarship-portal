import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(GlobalStateContext);

  if (!user) {
    return <Navigate to="/Auth/Login" />;
  }

  return children;
};

export default ProtectedRoute;
