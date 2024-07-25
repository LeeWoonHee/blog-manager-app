import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AlreadyLoggedInRouteProps {
  children: ReactNode;
}

const LoggedInRoute: React.FC<AlreadyLoggedInRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem("accessToken");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default LoggedInRoute;
