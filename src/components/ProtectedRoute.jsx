import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/AuthService";

const ProtectedRoute = ({ children }) => {
  return AuthService.isAuthenticated() ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;
