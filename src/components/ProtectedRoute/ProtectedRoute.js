import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return <Navigate to={"/you_are_not_admin"} />;
  }
  return children;
};

export default ProtectedRoute;
