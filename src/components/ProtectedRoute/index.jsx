import React from "react";
import { Navigate } from "react-router-dom";
import { getUserLevel } from "../../utils/auth";

const ProtectedRoute = ({ children, allowedLevels }) => {
  const userLevel = getUserLevel();

  if (!allowedLevels.includes(userLevel)) {
    return <Navigate to="/sem-permissao" />;
  }

  return children;
};

export default ProtectedRoute;
